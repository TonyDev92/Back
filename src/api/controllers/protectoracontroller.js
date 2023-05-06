const Protectora = require('../models/protectoramodel');
const bcrypt = require('bcrypt');
const {generateSign} = require('../../utils/jsw');
const {validateEmail, validateEmailOnUse , validatePassword} = require('../../utils/validators');


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

        newProtectora.image = req.file.path;
        
        if(!validateEmail(newProtectora.email)){ //TEST EMAIL
            return res.status(400).json({message: 'Invalid Email'})
        }
        if(!validatePassword(newProtectora.password)){ //TEST PASSWORD
            return res.status(400).json({message: 'Invalid Password'})
        }
        if( await validateEmailOnUse(newProtectora.email) > 0){ //TEST EMAIL ALREADY ON USE
            return res.status(400).json({message: 'This email already on use'})
        }
        newProtectora.password = bcrypt.hashSync(newProtectora.password, 10); //HASH PASSWORD
        const createProtectora = await newProtectora.save();

        return res.status(201).json(createProtectora);

    } catch (error) {
        return res.status(500).json(error);
    }
}

const putProtectora = async (req, res) => {

    try {
        const {id} = req.params;
        const putProtectora = new Protectora(req.body);
        putProtectora._id = id;

        const updateProtectora = await Protectora.findByIdAndUpdate(id, putProtectora);

        return !updateProtectora ? req.status(404).json({ message : 'Protectora not found to be updated'}) : res.status(200).json(updateProtectora);

    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = { getProtectora , protectoraRegister , putProtectora};