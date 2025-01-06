const express =require("express")
const router=express.Router()
const Patient =require("../models/Patient")

router.post("/addpatient",async (req,res)=>{
    const {name,mobile,disease,email,password}=req.body
    console.log(name,email,password,mobile,disease)
    const existingPatient=await Patient.findOne({email})
    if(existingPatient){
        return res.status(400).json({"message":"User already exists"})
    }
    const newPatient= new Patient({name,mobile,disease,email,password})
    await newPatient.save()
    res.status(201).json({"message":"patient created successfully"})
})
module.exports=router