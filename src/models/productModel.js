import mongoose, { mongo } from "mongoose";



const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name field is required"],
        minLength: 3,
        unique: true,
        lowercase: true,
        trim: true,
    },
    price:{
        type:Number,
        required: [true, "Price field is required"],
        min:[0, "Price"]
        

    },
    description: String,
    quantity: Number,
    
    category: String,
    destacado: Boolean

});

productSchema.set("toJSON", {getters: true, setters: true});
export default mongoose.model("product", productSchema);