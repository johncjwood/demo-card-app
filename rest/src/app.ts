// src/app.ts
import express, { Request, Response } from 'express';
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


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});