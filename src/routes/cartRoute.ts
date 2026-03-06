import express from "express";
import { getActiveCartForUser } from "../services/cartService.ts";
import validateJWT, { type ExtendedRequest } from "../middlewares/validateJWT.ts";


const router = express.Router();

router.get('/', validateJWT,
     async (req: ExtendedRequest, res: express.Response) => {
        const userId = req.user._id;
    //TODO get userId from the jwt, after 

    const cart = await getActiveCartForUser({ userId });
    res.json(cart);
     });




export default router;