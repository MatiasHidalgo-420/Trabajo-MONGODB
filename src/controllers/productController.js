import product from "../models/productModel.js"


export const getAll = async (req, res) => {
    try {
        const products = await product.find();
        if(products.length === 0){
            return res.status(404).json({message: "There are no products" })
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: "internal server error", error})
    }
};

export const create = async (req, res) => {
    try {
        const productInfo = new product(req.body);
        const { name } = productInfo;
        const productExist = await product.findOne({ name });
        if(productExist){
            return res.status(400).json({message: `Product ${name} already exist`})
        }
        const savedProduct = await productInfo.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json({ message: "internal server error", error })
    }
}

export const findOne = async (req, res) => {
    try {
        const name  = req.params.name;
        const parsedName = name.trim().toLoweCase();
        const productExist = await product.findOne({ name: parsedName });
        if(!productExist){
            return res.status(400).json({message: `Product ${name} already exist`})
        }
        res.status(200).json(productExist)
    } catch (error) {
        res.status(500).json({message: "internal server error",error});
    }
};