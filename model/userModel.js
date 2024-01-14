const { default: mongoose } = require('mongoose')

const userSchema=new mongoose.Schema(
    {
        userName:{
            type:String,
            required:[true,"name is required"]
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:[true,"Already a User"]
        },
        password:{
            type:String,
            trim:true,
            required:[true,"Password is required"]
        },
        age:{
            type:Number,
            required:[true,"age is required"]
        },
        status:{
            type:Boolean,
            default:0,
            trim:true,
            required:[true,"status is required"]
        },
    },
    {
        timestamps:true
    }
)

const userModel=mongoose.model("user",userSchema)
module.exports=userModel