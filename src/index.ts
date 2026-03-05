import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.ts';

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/E-Commerce').then(() =>
    console.log('Connected to MongoDB'))

    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
    
    app.use(express.json());

    app.use('/user', userRoute)

    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});