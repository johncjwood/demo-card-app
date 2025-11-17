// src/app.ts
import express, { Request, Response } from 'express';

interface User {
  id: number;
  name: string;
  email: string;
}

const app = express();
const PORT = 3001;

app.use(express.json());

// Sample data
let users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// Tinyauth context endpoint
app.get('/api/context/app', (req: Request, res: Response) => {
  res.json({ app: 'demo-card-app', version: '1.0.0' });
});

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

// POST a new user
app.post('/api/users', (req: Request, res: Response) => {
  const newUser: User = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});