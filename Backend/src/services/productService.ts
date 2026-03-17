import productModel from "../models/productModel.ts";

export const getAllProducts = async () => {
    return await productModel.find();
};


export const seedInitialProducts = async () => {
    try{
    const Products = [
        {title: "Laptop", image: "https://imgs.search.brave.com/fuO3Y2je8sCC6hRZ-Iac_FtX-aWVsfdMLB3MPCsb_Wo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZWxs/c3RhdGljLmx1cm9j/b25uZWN0LmNvbS9t/ZWRpYS9jYXRhbG9n/L3Byb2R1Y3QvY2Fj/aGUvM2UxM2NkNTQ0/MjRmM2M0OTdlODRm/Y2UzYTg1YjU1NzAv/bi9vL25vdGVib29r/LWRiMDYyNTB0LWJs/LWNvcGlsb3QtcGMt/c21hbGxfbmV3XzEu/cG5n", price: 15000, stock: 100},
        {title: "Car", image: "https://via.placeholder.com/150", price: 19.99, stock: 50},
        {title: "Phone", image: "https://via.placeholder.com/150", price: 5.99, stock: 200},
    ];

    const existingproducts = await getAllProducts();

    if (existingproducts.length === 0) {
        await productModel.insertMany(Products);
    }
}
catch(err){
    console.error("Error seeding products:", err);

}
    
};
