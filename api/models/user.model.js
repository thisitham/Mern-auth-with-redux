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
    },
    profilePicture:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png", //defaulty put image address from internet //beacasue we provide photo for only google authentication // other users defaulty get this image
    }
},{timestamps: true}) //{timeseries: true} use to create some extra information to each user when creating //we no need to create manually them it will aotomatically do mongoose

const User = mongoose.model('User', userSchema);

export default User;