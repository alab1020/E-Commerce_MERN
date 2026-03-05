import userModel from "../models/userModel.js";

interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};


export const register = async ({firstName, lastName, email, password}: RegisterData) => {
const findUser = await userModel.findOne({email: email});
if(findUser) {
    return{error: {message: "User already exists"}} 
}

const newUser = new userModel({firstName, lastName, email, password});
await newUser.save()

return newUser;


}

interface LoginParams{
    email: string;
    password: string;
}


export const login = async ({email, password}: LoginParams) => {

    const findUser = await userModel.findOne({email});

    if(!findUser) {
        return {error: {message: "User not found"}}
    }


    const passwordMatch = findUser.password === password;

    if (passwordMatch) {
        return findUser;
    } else {
        return {error: {message: "Invalid password"}}
    }
}