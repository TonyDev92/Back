const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {type: String , required: true},
        password: {type : String , required: true},
        pets:[{ type:String , required: false}], //Array para almacenar las mascotas de Usuario
        favorites: [{type:String , required: false}], //Almacenamos Favoritos
        adoptionStatus: [{type:String, required:false}],
        role: {type: String , default: 'user', enum:'user'}
    },{
        timestamps:true
    }
)

const User = mongoose.model('user', userSchema);
module.exports = User;
