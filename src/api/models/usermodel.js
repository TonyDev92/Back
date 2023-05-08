const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {type: String , required: true},
        name: {type : String , required : true},
        surname: {type: String , required : true},
        password: {type : String , required: true},
        pets:[{ type: mongoose.Types.ObjectId, ref: 'Animales' , required: false}], //Array para almacenar las mascotas de Usuario
        favorites: [{type: mongoose.Types.ObjectId, ref: 'Animales' , required: false}], //Almacenamos Favoritos
        adoptionStatus: [{type: mongoose.Types.ObjectId, ref: 'protectora' , required: false}],
        role: {type: String , default: 'user', enum:'user'}
    },{
        timestamps:true
    }
)

const User = mongoose.model('user', userSchema);
module.exports = User;
