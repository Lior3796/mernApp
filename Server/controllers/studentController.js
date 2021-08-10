const studentModel = require('../models/studentModel');
const validateData = require('../validation/validationData');
const bcryptjs = require("bcryptjs");

const newStudent ={
 firstName:"lior",
 lastName:"solomon",
 email:"liorlsa9",
 date:1996-07-03,
 age:18
}

async function getStudents(req,res){
    try{
        await studentModel.find({},(err,result) =>{
            if(err) throw err;
            console.log(result);
            res.json({message:"success",data:result})
        })
    } catch(err) {
        res.json({message:"database problem", error:err})
    }
   
}

async function getStudent(req,res){
    const {firstName,lastName,email,date,age} = req.body;
    try{
        await studentModel.findOne({email:email},(err,student) =>{
            if(student) {
                res.status(400).json({email:"Email already exists"})
            }
            else{
                bcryptjs.genSalt(10,(err,salt)=>{
                    bcryptjs.hash(email,salt,(err,hash)=>{
                       if(err) throw err;
                       req.body.pas

                    })
                })
                
                console.log(result);
                res.json({message:"success",data:result})
            }
         
        })
    } catch(err) {
        res.json({message:"database problem", error:err})
    }
   
}

async function createNewStudent(req,res){
   const {errors,isValid} = validateData;
   if(isValid){
       res.status(400).json({error:ero})
   } 
    try{
        await studentModel.insertMany(req.body.student,(err,result) =>{
            if(err) throw err;
            console.log(result);
            res.json({message:"success",data:result})
        })
    } catch(err) {
        res.json({message:"database problem", error:err})
    }
   
}

async function updateStudent(req,res) {
    const {age} = req.body;
    try{
        await studentModel.updateMany({firstName:"lior"},{$set:{age:age}},(err,result) =>{
            if(err) throw err;
            console.log(result);
            res.json({message:"success",data:result})
        })
    } catch(err) {
        res.json({message:"database problem", error:err})
    }
   
}

async function deleteStudent(req,res){
    
    try{
        await studentModel.deleteOne({email:req.params.email},(err,result) =>{
            if(err) throw err;
            console.log(result);
            res.json({message:"success",data:result})
        })
    } catch(err) {
        res.json({message:"database problem", error:err})
    }
   
}

module.exports = {
    getStudents,
    deleteStudent,
    updateStudent,
    createNewStudent,
    getStudent
}
