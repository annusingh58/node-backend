import mongoose from "mongoose";

import { Schema } from "mongoose";

 const product = new Schema({
        pname : String,
        pprice : Number
        

 })

const user = new Schema({
        name:String,
        email:String,
        number:Number,
        otpemail:String,
        otpnumber:String,
        product:[product]

});


export default mongoose.model("USER",user);