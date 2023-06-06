import mongoose from "mongoose";

import { Schema } from "mongoose";



const user = new Schema({
        name:String,
        email:String,
        number:Number,
        otpemail:String,
        otpnumber:String

});


export default mongoose.model("USER",user);