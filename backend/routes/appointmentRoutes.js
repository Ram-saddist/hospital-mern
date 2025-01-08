const express = require("express")
const router = express.Router()
const Appointment = require("../models/appointmentModel")

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
module.exports=router