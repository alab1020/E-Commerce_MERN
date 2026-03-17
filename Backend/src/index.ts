import ('dotenv/config');
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.ts';
import productRoute from './routes/productRoute.ts';
import { seedInitialProducts } from './services/productService.ts';
import cartRoute from './routes/cartRoute.ts';

const app = express();
const port = 3001;

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/E-Commerce').then(() =>
    console.log('Connected to MongoDB'))

    .catch((error: any) => {
        console.error('Error connecting to MongoDB:', error);
    });
    
    app.use(express.json());

    seedInitialProducts();

    app.use('/user', userRoute)
    app.use('/products', productRoute)
    app.use('/cart', cartRoute)
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});