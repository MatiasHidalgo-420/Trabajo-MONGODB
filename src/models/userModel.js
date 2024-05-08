import mongoose from "mongoose";




const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        maxlength: 16,
        minlegth: 2,
        trim: true,
        lowercase: true,

    },

    apellido:{
        type: String,
        required: true,
        maxlength: 16,
        minlegth: 2,
        trim: true,
        lowercase: true,
    },

    email: {
        type: String,
        required: true,
        maxlength: 30,
        minlegth: 8,
        trim: true,
        lowercase: true,
        match:  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ,
        unique: true,
    },

    carrera:{
        type: String,
        required:true,
        
    },

    edad:{
        type: Number,
        required: true,
        min: 18,
        max: 100,
    },

    registrationDate:{
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("user", userSchema);
