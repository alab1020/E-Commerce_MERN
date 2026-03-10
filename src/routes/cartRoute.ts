import express from "express";
import { addItemToCart, checkoutCart, clearCart, deleteItemFromCart, getActiveCartForUser, updateItemInCart } from "../services/cartService.ts";
import validateJWT, { type ExtendedRequest } from "../middlewares/validateJWT.ts";


const router = express.Router();

router.get('/', validateJWT,
     async (req: ExtendedRequest, res: express.Response) => {
        const userId = req?.user?._id;
    //TODO get userId from the jwt, after 

    const cart = await getActiveCartForUser({ userId });
    res.status(200).json(cart);
     });

    router.post('/items', validateJWT, async(req: ExtendedRequest, res)=> {

        const userId = req?.user?._id;
        const {productId, quantity} = req.body;
      
        
        const response = await addItemToCart({userId, productId, quantity})
        
        res.status(response.statusCode).json(response.data);
    
    
    })

    router.put("/items", validateJWT, async(req: ExtendedRequest, res) => {
        //TODO update item in cart
        const userId = req?.user?._id;
        const {productId, quantity} = req.body;
        const response = await updateItemInCart({userId, productId, quantity})
        res.status(response.statusCode).send(response.data);
    })

    router.delete("/items/:productId", validateJWT, async(req: ExtendedRequest, res) => {
        //TODO delete item from cart
        const userId = req?.user?._id;
        const {productId} = req.params;

        const response = await deleteItemFromCart({userId, productId})
        res.status(response.statusCode).send(response.data);
    })
    router.delete("/", validateJWT, async(req: ExtendedRequest, res) => {
        const userId = req?.user?._id;
        const response = await clearCart({userId});
        res.status(response.statusCode).send(response.data);

    })
    router.post("/checkout", validateJWT, async(req: ExtendedRequest, res) => {
        //TODO checkout cart
        const userId = req?.user?._id;
        const{address} = req.body;
         const response = await checkoutCart({userId, address});
        res.status(response.statusCode).json(response.data);
    })


export default router;