// src/app.ts
import express, { Request, Response } from 'express';
import path from 'path';
import { query } from './database';

interface User {
  id: number;
  name: string;
  email: string;
}

interface CardResult {
  card_name: string;
  color: string;
  card_type: string;
  subset_num: number;
  rarity: string;
  file_loc: string;
  set_name: string;
  release_date: string;
  total_cards: number;
  quantity: number | null;
}

const app = express();
const PORT = 3001;

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



// Sample data
let users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// GET all users
app.get('/api/users', (req: Request, res: Response) => {
  res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST /api/login - Authenticate user
app.post('/api/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.json(-1);
  }
  
  try {
    const result = await query('SELECT * FROM users WHERE login_id = $1 AND password = $2', [username, password]);
    
    if (result.length > 0) {
      res.json(0);
    } else {
      res.json(-1);
    }
  } catch (error) {
    console.error('Login error:', error);
    res.json(-1);
  }
});

// POST /api/cards - Query cards with user collection data
app.post('/api/cards', async (req: Request, res: Response) => {
  const { card_set, login_id } = req.body;
  
  if (!card_set || !login_id) {
    return res.status(400).json({ message: 'card_set and login_id are required' });
  }
  
  try {
    // SQL query with joins
    const sqlQuery = `
      SELECT 
        c.card_id,
        c.card_name,
        c.color,
        c.card_type,
        c.subset_num,
        c.rarity,
        c.file_loc,
        cs.set_name,
        cs.release_date,
        cs.total_cards,
        COALESCE(uc.quantity, 0) as quantity
      FROM card c
      LEFT JOIN card_subset cs ON c.card_subset_id = cs.card_subset_id
      LEFT JOIN user_card uc ON c.card_id = uc.card_id
      LEFT JOIN users u ON uc.user_id = u.user_id AND u.login_id = $1
      WHERE c.card_set = $2
      ORDER BY c.subset_num, c.card_name
    `;
    
    const results = await query(sqlQuery, [login_id, card_set]);
    
    res.json(results);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// GET /api/user/:login_id - Get user_id from login_id
app.get('/api/user/:login_id', async (req: Request, res: Response) => {
  const { login_id } = req.params;
  
  try {
    const result = await query('SELECT user_id FROM users WHERE login_id = $1', [login_id]);
    
    if (result.length > 0) {
      res.json({ user_id: result[0].user_id });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT /api/cards/quantity - Update card quantity for user
app.put('/api/cards/quantity', async (req: Request, res: Response) => {
  const { card_id, user_id, quantity } = req.body;
  
  if (!card_id || !user_id || quantity === undefined) {
    return res.status(400).json({ message: 'card_id, user_id, and quantity are required' });
  }
  
  try {
    // Check if user_card record exists
    const existingRecord = await query('SELECT * FROM user_card WHERE user_id = $1 AND card_id = $2', [user_id, card_id]);
    
    if (existingRecord.length > 0) {
      // Update existing record
      if (quantity <= 0) {
        // Delete record if quantity is 0 or negative
        await query('DELETE FROM user_card WHERE user_id = $1 AND card_id = $2', [user_id, card_id]);
      } else {
        await query('UPDATE user_card SET quantity = $1 WHERE user_id = $2 AND card_id = $3', [quantity, user_id, card_id]);
      }
    } else if (quantity > 0) {
      // Insert new record only if quantity is positive
      const maxId = await query('SELECT COALESCE(MAX(user_card_id), 0) + 1 as next_id FROM user_card');
      const nextId = maxId[0].next_id;
      await query('INSERT INTO user_card (user_card_id, user_id, card_id, quantity) VALUES ($1, $2, $3, $4)', [nextId, user_id, card_id, quantity]);
    }
    
    res.json({ success: true, quantity: Math.max(0, quantity) });
  } catch (error) {
    console.error('Update quantity error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});