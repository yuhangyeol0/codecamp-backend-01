import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema({
    token: String,
    phone: String,
    isAuth: Boolean
})

export const Phone = mongoose.model('Phone', phoneSchema)