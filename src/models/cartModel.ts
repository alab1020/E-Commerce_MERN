import mongoose, { Schema, Document, type ObjectId } from 'mongoose';
import type { IProduct } from './productModel.ts';

export interface ICartItem {
    product: IProduct;
    unitPrice: number;
    quantity: number;

}

export interface ICart extends Document {
    userId: ObjectId| string;
    items: ICartItem[];
   totalAmount: number;
   status: 'active' | 'completed';
}

const cartItemSchema: Schema = new Schema<ICartItem>({
    product:{type: Schema.Types.ObjectId, ref:'products', required: true},
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 }
});

const cartSchema = new Schema<ICart>({
    userId: {type: Schema.Types.ObjectId, ref :'User', required: true},
    items: [cartItemSchema],
    totalAmount: { type: Number, required: true, default: 0 },
    status: { type: String, enum: ['active', 'completed'], required: true, default: 'active' }
});

export const cartModel = mongoose.model<ICart>('Cart', cartSchema)