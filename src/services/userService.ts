import userModel from "../models/userModel.ts";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};


export const register = async ({ firstName, lastName, email, password }: RegisterData) => {
    const findUser = await userModel.findOne({ email: email });
    if (findUser) {
        return { data: { message: "User already exists" }, statusCode: 400 }
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new userModel({ firstName, lastName, email, password: hashedPassword });
    await newUser.save()

    return { data: generateJWT({firstName, lastName, email}), statusCode: 201 };


}

interface LoginParams {
    email: string;
    password: string;
}


export const login = async ({ email, password }: LoginParams) => {

    const findUser = await userModel.findOne({ email });

    if (!findUser) {
        return { data: { message: "User not found" }, statusCode: 400 }
    }


    const passwordMatch = await bcrypt.compare(password, findUser.password);

    if (passwordMatch) {
        return { data: generateJWT({email, firstName: findUser.firstName, lastName: findUser.lastName}), statusCode: 200 };
    } else {
        return { data: { message: "Invalid password" }, statusCode: 400 }
    }
}


const generateJWT = (data: any) => {
    return jwt.sign(data, 'hazard-fatal-helmet')
}

