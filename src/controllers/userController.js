import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const create = async (req, res) => {
    try{
        // tomar datos de body (post)
        const userData = new User(req.body);

// buscar si existe user por filtrado de email + destructuracion
        const  {email} = userData;
        const userExist = await User.findOne({ email });
        if(userExist) {
            return res.status(400).json({message: `User with email: ${email} already exist`})
        }
        // guardar user
        const savedUser = await userData.save();
// mostrar user guardado
const {password, ...rest } = savedUser;
        res.status(200).json(rest);
        } catch (error) {
        res.status(500).json({error: "internal server error"});       
        }
};


export const get = async (req, res ) => {
    try {
        const users = await User.find();
        if(users.length === 0){
            return res.status(404).json({message: "There are no users"});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal server error"})
    }
};


export const update = async(req, res) => {
    try {
        //saber q user vamos a actualizar mediante identificador unico (id)
       const id = req.params.id
       //saber si existe ese user(id)
       const userExist = await User.findOne({ _id: id });
       
       if(!userExist){
        return res.status(404).json({ message: "User not found" });
       }
       //actualizamos user
       const updateUser = await User.findByIdAndUpdate( {_id: id} , req.body, { 
        new: true,
    });
       res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({message: "internal server error", error});
    };
}


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({_id: id})
        if(!userExist){
            return res.status(404).json({ message: "User not found"});
        }
        await User.findByIdAndDelete({_id: id})
        res.status(201).json({message: "User deleted successfully"})
    } catch (error) {
        res.status(500).json({ error: "internal server error" });
    }
};

export const validate = async (req, res) => {
    try {
        const userFound = await User.findOne({ email: req.body.email });
        if(!userFound){
            res
            .status(400)
            .json({message: "El email y/o la contraseña son incorrectos"})
        }
        if(bcrypt.compareSync(req.body.password, userFound.password)){
           const payload = {
             userId: userFound._id,
             userEmail: userFound.email,
           };
           const token = jwt.sign(payload, "secreto" , { expiresIn: "1h" });
           res.status(200).json({token});
        } else {
            res.status(400).json({message: "El email y/o contraseña son incorrectos"});
            return;
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
};