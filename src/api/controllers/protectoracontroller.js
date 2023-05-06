const Protectora = require('../models/protectoramodel');

//GET PROTECTORA
const getProtectora = async (req , res) => {

    try {
        const allProtectora = await Protectora.find().populate('animals');
        const public = []; //DATOS PUBLICOS DE LA PROTECTORA
        for(const obj of allProtectora){
            const newObj = {
                name: obj.name,
                direction:obj.direction,
                telephone: obj.telephone,
                image: obj.image,
                email: obj.email,
                animals: obj.animals
            }
            public.push(newObj);
        }
        
        return res.status(200).json(public);
    } catch (error) {
        res.status(500).json(error)
    }
}
//POST PROTECTORA 

const protectoraRegister = async (req, res) => {

    try {
        const newProtectora = new Protectora(req.body);
        const createProtectora = await newProtectora.save();
        return res.status(200).json(createProtectora);
    } catch (error) {
        return res.status(500).json(error);
    }
}
module.exports = { getProtectora , protectoraRegister};