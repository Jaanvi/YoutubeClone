//require("dotenv").config({path:"./env"});

import dotenv from "dotenv"
import connectDB from "./db/indexdb.js";
import {app} from "./app.js";

dotenv.config({
    path:"./env"
})
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed !!",error);
})







/*
import mongoose from "mongoose";
import {DB_NAME} from "./constents";
import express from "express";
const app = express();
// function connnectDB(){} aise function ka use krke isko connect kr sakte hai

//hub iffi function ka use krke connect krenge database
(async () =>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/&{DB_NAME}`)
       //app wala express me error btayga
       app.on("error",(error)=>{
              console.log("ERROR",error);
              throw error
       })

       app.listen(process.env.PORT,()=>{
               console.log(`The app is listening on the port ${process.env.PORT}`);
       })
    }
    catch(error){
        console.log("ERROR",error);
        throw error
    }
})()
*/
