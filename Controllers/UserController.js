import { exec } from 'child_process';
import USER from '../modals/users.js';
import {v4 as uuidv4} from "uuid";


export const register= async(req ,res)=> {
   try{
    const {name,email,number}=req.body; //destructuring vo chij pass kro jo hume chaiye name email password etc...postman  me request 

    if(!name) return res.send("name is required");
    if(!email) return res.send("email is required");
    if(!number) return res.send("number is required");


    const isEmailPresent = await USER.find({email}).exec();
    if(isEmailPresent.length) return res.send("email is already exit");

    const isNumberPresent =await USER.find({number}).exec();
    if(isNumberPresent.length) return res.send("Number is present" );

    const otpemail=uuidv4();
    const otpnumber=uuidv4();


    const user= new USER({
        name,
        email,
        number,
        otpemail: otpemail,
        otpnumber:otpnumber,


    });


    await user.save();

    res.send("check your otp at moble number or email id")

}
   catch(error){
    res.send(error);
   }

   }




   export const checkforemail= async(req,res)=>{
    try{
        const { email,otp }=req.body;

        if(!email) return res.send("email is required");
        if(!otp) return res.send("otp is required");

        const user = await USER.find({email}).exec();

        if(!user.length) return res.send("user is not found");

        if(user[0] .otpemail==otp){
            return res.send("otpemail is verify");
        }
        return res.send("otp wrong try again");

    }


    catch(error){
        res.send(error);

    }
   }

    export const otpchecknumber =async(req,res)=>{
        try{
            const {number,otp}=req.body;
            if(!number) return res.send("number is required");
            if(!otp) return res.send("otp is required");
            const user = await USER.find({number}). exec();


            if(!user.length) return res.send("user is not found");
             if(user[0].otpnumber==otp){
                return res.send("otp is verfied");
             }
             return res.send("otp wrong")

        }
        catch(error){
            res.send(error);
        }
    }


    export const login = async(req,res)=>{
        try{
            const {email,number} =  req.body;
             if(!email) return res.send("email is required");
             if(!number) return res.send("number is required");

             const user = await USER.find({email,number}).exec();

             if(!user.length){
                return res.send("user not found");
             }
             return res.send("login secessfull");

         


        }

        catch(error){
            res.send(error);
        }
    }



    export const product =async(req,res)=>{
        try{
            const{ name,price,email} = req.body;
            
            if(!name) return res.send("name is required");
            if(!email) return res.send("email is required");
            if(!price) return res.send("price is required");


            const user = await USER.find({email}).exec();
            if(!user.length) return res.send("user not found");

            const addproduct ={pname:name, pprice:price};
            user[0].product.push(addproduct);

            await user[0].save();
            res.send("product added");
            

        }
        catch(error){
            res.send(error);
        }
    }




    export const deleteproduct = async(req,res) =>{
        try{
            const {email} =req.body;
            if(!email) return res.send("email is required");

            const user= await USER.find({email}).exec();

            if(!user.length) return res.send("user not found");
            user[0].product =undefined;
            await user[0].save();
            
            return res.send("product deldeted");

        }
        catch(error){
            res.send(error);
        }
    }




   
