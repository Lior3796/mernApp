const studentModel = require('../models/studentModel');

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
        await studentModel.findOne({firstName:firstName},(err,result) =>{
            if(err) throw err;
            console.log(result);
            res.json({message:"success",data:result})
        })
    } catch(err) {
        res.json({message:"database problem", error:err})
    }
   
}

async function createNewStudent(req,res){
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
