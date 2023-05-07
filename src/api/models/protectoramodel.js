const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const protectoraSchema = new mongoose.Schema(
    {   
        email: {type: String , required: true},
        password: {type:String, required: true},
        role: {type:String, default: 'protectora', enum :'protectora'},
        city: {type: String, required: true},
        name: {type: String , required: true},
        direction : {type: String, required: true},
        telephone : {type: Number , required:true},
        image : {type:String , required: false, default: "https://res.cloudinary.com/dpekebzbd/image/upload/v1683388749/Lucky/Default_xajfm0.png" }, 
        animals : [{type: mongoose.Types.ObjectId, ref: 'Animales'}]
    },{
        timestamps: true
    }
)

const Protectora = mongoose.model('protectora',protectoraSchema);
module.exports = Protectora;