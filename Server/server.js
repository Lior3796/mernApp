const express = require("express");
const CONNECTION_URL = process.env.CONNECTION_URL || 8080;
const dotenv = require("dotenv").config();
const studentRouter = require("./routing/studentRouter");
const app = express();
const cors = require("cors");
const mongodbClient = require("mongodb").MongoClient;
const db = require("./DB")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

db.on("error",(error)=>{
    if(error) console.log(error);
    console.log("error");
})


app.listen(CONNECTION_URL,(err)=>{
    if(err)console.log(err);
    console.log("success");
})
app.use("/api/student",studentRouter);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(_dirname,'../client/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../client/build','index.html'))
    })
}