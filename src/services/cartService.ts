import { cartModel } from "../models/cartModel.ts";
import productModel from "../models/productModel.ts";

interface CreateCartForUser {
    userId: string;

}

const createCartForUser = async ({ userId }: CreateCartForUser) => {

    const cart = await cartModel.create({ userId, totalAmount: 0 });
    await cart.save();
    return cart;
}

interface GetActiveCartForUser {
    userId: string;
}

export const getActiveCartForUser = async ({ userId }: GetActiveCartForUser) => {
    let cart = await cartModel.findOne({ userId, status: 'active' });
    

    if (!cart) {
        cart = await createCartForUser({ userId });
    }
    return cart;
};

interface AddItemToCart {
    productId: any;
    quantity: number;
    userId: string;
}
export const addItemToCart = async({ userId, productId, quantity}: AddItemToCart) => {
    // Implementation for adding item to cart

    const cart = await getActiveCartForUser({userId});

    //does the item already exist in the cart? if so, update quantity, if not add new item to cart
    const existsInCart = cart.items.find((p) => p.product.toString() === productId);
    if(existsInCart){
        return {data: {message: "Product already in cart"}, statusCode: 400}
    }
    //Fetch the product 
    const product = await productModel.findById(productId);

    if(!product){
        return {data: {message: "Product not found"}, statusCode: 404}
    }
    if(product.stock < quantity){
        return {data: {message: "Not enough stock"}, statusCode: 400}
    }
    cart.items.push({product: productId,
                     unitPrice: product.price,
                      quantity
                    
            });

            //Update the total amount of the cart
            cart.totalAmount += product.price * quantity;

            const updateCart = await cart.save();
            return {data: updateCart, statusCode: 200};
    

}