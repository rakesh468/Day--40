import express from "express";
import fs from "fs";
const app=express();

const PORT=5500;

app.get("/",(request,response)=>{
response.send("Hello World")
})
app.listen(PORT,()=>console.log("App is running in ",PORT))

let data=`${new Date()}`;

let file=`${new Date().getUTCDate}`

for(let i=0;i<10;i++){
    fs.writeFile(`./files/${file}.txt`,data,(err)=>{
        console.log("completed")
    })
}
fs.readdir("./files",(err,files)=>{
    console.log(files)
})

for(let i=0; i<10; i++){
    fs.readFile(`./${file}.txt`,"utf-8",(err)=>{
console.log(data);
    })
}



