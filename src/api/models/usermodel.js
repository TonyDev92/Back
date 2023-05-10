const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {type: String , required: true},
        password: {type : String , required: true},
        pets:[{ type:String , required: false}], //Array para almacenar las mascotas de Usuario
        favorites: [{type:String , required: false}], //Almacenamos Favoritos
        adoptionStatus: [{type:String, required:false}],
        role: {type: String , default: 'user', enum:'user'},
        imagen: {type: String, required:false, default:"https://res.cloudinary.com/dpekebzbd/image/upload/v1683714441/Lucky/MicrosoftTeams-image_1_khngd3.png"}
    },{
        timestamps:true
    }
)

const User = mongoose.model('user', userSchema);
module.exports = User;
