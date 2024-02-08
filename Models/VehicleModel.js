const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema(
    {           ID:String,
                Model: String,
                Company:String,
                Year:String,
                Price:String
            }        
)


module.exports=mongoose.model("vehicle",vehicleSchema)
