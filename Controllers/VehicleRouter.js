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

router.get("/viewvehicle",async(req,res)=>{
    let data=await vehicleModel.find() // to retrieve data
    res.json(data)
})

module.exports=router