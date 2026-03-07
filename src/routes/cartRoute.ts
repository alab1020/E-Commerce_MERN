import express from "express";
import { addItemToCart, getActiveCartForUser } from "../services/cartService.ts";
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



export default router;