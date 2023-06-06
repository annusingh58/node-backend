import mongoose from "mongoose";
import morgan from "morgan";
import express from "express";
import router from "./routes/UserRoutes.js";



const app = express();

app.use(morgan('dev')) ;  //morgen status 200 .etc dev for developement 

app.use(express.json());

app.use('/api/v2',router);

mongoose.connect('mongodb+srv://annusingh:anusingh58@cluster0.md93vry.mongodb.net/node')


.then(()=>console.log("db connected"))
.catch((error)=> console.log("db error =>",err))


app.listen(5000,()=>console.log("working on PORT 5000"));