const { default: mongoose } = require('mongoose')

const adminSchema=new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true
        },
        password:{
            type:String,
            trim:true,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        status:{
            type:String,
            default:"0",
            trim:true,
            required:true
        },
    },
    {
        timestamps:true
    }
)
module.exports=mongoose.Model("admin",adminSchema)