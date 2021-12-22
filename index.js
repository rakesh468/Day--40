import dotenv from "dotenv";
import express from "express";
import fs from "fs";

dotenv.config();
// creating a server using express //
const app=express();



// running server under PORT=>5500 //
const PORT=process.env.PORT

app.get("/",(request,response)=>{
response.send("Hello World")
})

app.listen(PORT,()=>console.log("App is running in ",PORT))

// creating a  data timestamp ///
let data=`${new Date()}`;

let file=`${new Date().getUTCDate}`

// creating file in  new folder ///
for(let i=0;i<10;i++){
    fs.writeFile(`./files/${file}.txt`,data,(err)=>{
        console.log("completed")
    })
}

// reading data in tht particullar folder //
fs.readdir("./files",(err,files)=>{
    console.log(files)
})

// read data on the created folder//
for(let i=0; i<10; i++){
    fs.readFile(`./${file}.txt`,"utf-8",(err)=>{
console.log(data);
    })
}


