import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
},{timestamps: true}) //{timeseries: true} use to create some extra information to each user when creating //we no need to create manually them it will aotomatically do mongoose

const User = mongoose.model('User', userSchema);

export default User;