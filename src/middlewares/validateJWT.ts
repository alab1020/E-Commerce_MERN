import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.ts";


export interface ExtendedRequest extends Request {
    user?: any;

}
const validateJWT = (req: ExtendedRequest, res: Response, next: NextFunction) => {

    const authorizationHeader = req.get('Authorization');

    if (!authorizationHeader) {

        res.status(403).send("authorizationheader ist not provided");
        return;
    }
    const token = authorizationHeader.split(' ')[1]; // Assuming

    if(!token) {
        res.status(401).send("Forbidden: No token provided");
        return;
    }
    jwt.verify(token, "hazard-fatal-helmet", async(err, payload) => {
        if (err) {
            res.status(403).send("Forbidden: Invalid token");
            return;
        }
        if(!payload){res.status(403).send("Forbidden: Invalid token"); return;}

        const userPayload = payload as 
        {email: string,
        firstName: string,
        lastName: string
     };

        const user = await userModel.findOne(({email: userPayload.email}))

        req.user = user 

        next();
})

};

        


export default validateJWT;