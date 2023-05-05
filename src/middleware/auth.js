const User = require('../api/models/usermodel');
const {verifySign} = require('../utils/jsw');

const isAuth = async (req, res , next) => {

    try {

        const authorization = req.headers.authorization; 

        if(!authorization){ //TEST IS AUTH
            return res.status(401).json({message: 'unauthorized'})
        }

        const token = authorization.split(' ')[1];

        if(!token){ // TEST HASTOKEN 
            return res.status(401).json({message: 'no token provided'})
        }
        let tokenVerified = verifySign(token, process.env.JWT_KEY);

        if(!tokenVerified.id){ //TEST TOKEN VERIFIED 
            return res.status(401).json(tokenVerified);
        }

        const userLogged = await User.findById(tokenVerified.id); 

        req.user = userLogged;

        next();

    } catch (error) {
        return res.status(500).json(error);
    }
}