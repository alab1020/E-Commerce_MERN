import productModel from "../models/productModel.ts";

export const getAllProducts = async () => {
    return await productModel.find();
};


export const seedInitialProducts = async () => {
    const Products = [
        {title: "Laptop", image: "https://via.placeholder.com/150", price: 10.99, stock: 100},
        {title: "Car", image: "https://via.placeholder.com/150", price: 19.99, stock: 50},
        {title: "Phone", image: "https://via.placeholder.com/150", price: 5.99, stock: 200},
    ];

    const existingproducts = await getAllProducts();

    if (existingproducts.length === 0) {
        await productModel.insertMany(Products);
    }

    
};
