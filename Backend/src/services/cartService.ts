import { cartModel } from "../models/cartModel.ts";
import { orderModel, type IOrderItem } from "../models/orderModel.ts";
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

interface clearCart {

    userId: string;

}
export const clearCart = async ({ userId }: clearCart) => {
    const cart = await getActiveCartForUser({ userId });
    cart.items = [];
    cart.totalAmount = 0;
    const updatedCart = await cart.save();
    return { data: updatedCart, statusCode: 200 };
}
interface AddItemToCart {
    productId: any;
    quantity: number;
    userId: string;
}
export const addItemToCart = async ({ userId, productId, quantity }: AddItemToCart) => {
    // Implementation for adding item to cart

    const cart = await getActiveCartForUser({ userId });

    //does the item already exist in the cart? if so, update quantity, if not add new item to cart
    const existsInCart = cart.items.find((p) => p.product.toString() === productId);
    if (existsInCart) {
        return { data: { message: "Product already in cart" }, statusCode: 400 }
    }
    //Fetch the product 
    const product = await productModel.findById(productId);

    if (!product) {
        return { data: { message: "Product not found" }, statusCode: 404 }
    }
    if (product.stock < quantity) {
        return { data: { message: "Not enough stock" }, statusCode: 400 }
    }
    cart.items.push({
        product: productId,
        unitPrice: product.price,
        quantity

    });

    //Update the total amount of the cart
    cart.totalAmount += product.price * quantity;

    const updatedCart = await cart.save();
    return { data: updatedCart, statusCode: 200 };


};

interface updateItemInCart {
    productId: any;
    quantity: number;
    userId: string;
}

export const updateItemInCart = async ({ userId, productId, quantity }: updateItemInCart) => {
    const cart = await getActiveCartForUser({ userId });
    const existsInCart = cart.items.find((p) => p.product.toString() === productId);


    if (!existsInCart) {
        return { data: "Item not found in cart", statusCode: 404 };
    }
    const product = await productModel.findById(productId);

    if (!product) {
        return { data: { message: "Product not found" }, statusCode: 404 }
    }
    if (product.stock < quantity) {
        return { data: { message: "Not enough stock" }, statusCode: 400 }
    }


   
    // Calclulate the total amount of the cart
    const otherCartItems = cart.items.filter((p) => p.product.toString() !== productId);

    let total = otherCartItems.reduce((sum, product) => {
        sum += product.quantity * product.unitPrice;
        return sum;
    }, 0);
    
     existsInCart.quantity = quantity
    total += quantity * existsInCart.unitPrice;
    cart.totalAmount = total;
    const updatedCart = await cart.save();
    return { data: updatedCart, statusCode: 200 };
};

interface deleteItemFromCart {
    productId: any;
   
    userId: string;
}

export const deleteItemFromCart = async ({ userId, productId }: deleteItemFromCart) => {
     const cart = await getActiveCartForUser({ userId });
      const existsInCart = cart.items.find((p) => p.product.toString() === productId);
      
    if (!existsInCart) {
        return { data: "Item not found in cart", statusCode: 404 };

    }
        const otherCartItems = cart.items.filter((p) => p.product.toString() !== productId);
         let total = otherCartItems.reduce((sum, product) => {
        sum += product.quantity * product.unitPrice;
        return sum;
    }, 0);
    cart.items = otherCartItems;
    cart.totalAmount = total;

    const updatedCart = await cart.save();

    return { data: updatedCart, statusCode: 200 };
}

interface checkoutCart {
    userId: string;
    address:string;
}

export const checkoutCart = async ({ userId, address }: checkoutCart) => {
    if(!address){
        return {data: "Address is required", statusCode: 400}
    }
    const cart = await getActiveCartForUser({ userId });    
    const orderItems: IOrderItem[] = [];
    //Loop cartItems und create order items
    for (const item of cart.items){
        const product = await productModel.findById(item.product);
        if(!product){
            return {data: "Product not Found", statusCode: 404  }
        }

        const orderItem: IOrderItem = {
            productTitle: product.title,
            productImage: product.image,
            unitPrice: item.unitPrice,
            quantity: item.quantity
        };
        orderItems.push(orderItem);

    }

    const order = await orderModel.create({
        orderItems,
        total: cart.totalAmount,
        address,
        userId,
    })  
    await order.save();
    // update the cart status to completed
    cart.status = "completed";
    await cart.save();
    return {data: order, statusCode: 200};
};
