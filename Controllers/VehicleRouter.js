const express = require("express")
const vehicleModel=require("../Models/VehicleModel")


const router=express.Router()

router.post("/addvehicle",async(req,res)=>{
    let data=req.body
    let patient = new vehicleModel(data)
    let result = await patient.save()
    res.json({
        status:"success"
    })
})


module.exports=router