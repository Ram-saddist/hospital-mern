const express = require("express")
const router = express.Router()
const Appointment = require("../models/appointmentModel")

const Patient=require("../models/Patient")
const Doctor=require("../models/doctorModel")
router.post("/add", async (req, res) => {
    const { patientId, doctorId, date, time } = req.body
    try {
        const newAppointment = new Appointment({ patientId, doctorId, date, time })
        await newAppointment.save()
        res.status(201).json({ "message": "Appointment created successfully" })
    }
    catch(e){
        console.log("from appointment creation ",e)
    }
})

router.get("/",async (req,res)=>{
    try{
        const appointments= await Appointment.find()
        .populate("patientId","name disease mobile")
        .populate("doctorId","name designation specialization mobile ")
        console.log("appointments action",appointments)
        res.status(200).json(appointments)
    }
   
    catch(error){
        console.log(error)
        res.status(500).json({"message":"appointments get error"})
    }
})

router.put("/confirm/:id", async(req,res)=>{
    const appointment= await Appointment.findByIdAndUpdate(
        req.params.id,
        {status:"Confirmed"},
        {new:true}
    )    
    if(!appointment){
        res.status(404).json({"message":"appointment is not listed"})
    }
    res.status(204).json({"message":"Appointment accepted"})
})

router.put("/cancel/:id", async(req,res)=>{
    const appointment= await Appointment.findByIdAndUpdate(
        req.params.id,
        {status:"Cancelled"},
        {new:true}
    )    
    if(!appointment){
        res.status(404).json({"message":"appointment is not listed"})
    }
    res.status(204).json({"message":"Appointment declined"})
})

module.exports=router