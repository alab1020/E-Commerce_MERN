import express, { json } from 'express';
import { login, register } from '../services/userService.ts';
import userModel from '../models/userModel.ts';

const router = express.Router();

router.post('/register', async(req, res) => {
    const {firstName, lastName, email, password} = req.body;
    // default to a safe code if register() didn’t supply one
    const {statusCode, data} = await register({firstName, lastName, email, password});

    res.status(statusCode).send(data)
});

router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const {statusCode, data} = await login({email, password});
    res.status(statusCode).send(data);
});

router.get('/profile', async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
    
export default router;