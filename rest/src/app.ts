// src/app.ts
import express, { Request, Response } from 'express';
import { User } from './interfaces/User';

const app = express();
const PORT = 3000;

app.use(express.json()); // Enable JSON body parsing

// Sample in-memory data (replace with a database in a real application)
let users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

// GET all users
app.get('/users', (req: Request, res: Response<User[]>) => {
  res.status(200).json(users);
});

// GET user by ID
app.get('/users/:id', (req: Request<{ id: string }>, res: Response<User | { message: string }>) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST a new user
app.post('/users', (req: Request<{}, {}, User>, res: Response<User>) => {
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