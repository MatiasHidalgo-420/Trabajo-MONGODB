import mongoose from "mongoose";
import { acceptablePassword } from "../../utils/validators.js";




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
    },
    
    password: {
        type: String,
        validate:{
            validator:function(value){
                return acceptablePassword(value);
            },
            message: "unacceptable password : Debe tener mas de 8 digitos, una letra minuscula, una letra mayuscula y un numero",
        },
    },

});

export default mongoose.model("user", userSchema);
