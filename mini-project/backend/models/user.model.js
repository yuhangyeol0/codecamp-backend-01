import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    personal:String,
    prefer:String,
    pwd:String,
    phone:String,
    og:Object
})

export const User = mongoose.model("User",userSchema)