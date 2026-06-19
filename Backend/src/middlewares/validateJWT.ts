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
    const token = authorizationHeader.split(' ')[1]; // Assuming index of the token is 1, as the format is "Bearer <token>"

    if(!token) {
        res.status(401).send("Forbidden: No token provided");
        return;
    }
    if (!process.env.JWT_SECRET) {              // Check if JWT_SECRET is defined
    res.status(500).send("Server misconfiguration: JWT_SECRET missing");
    return;
}
jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithms: ["HS256"] },
    async (err, payload) => {

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