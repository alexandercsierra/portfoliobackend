const router = require('express').Router();
const generateToken = require('../utils/generateToken');


router.post('/login', (req, res)=>{
    const {username, password} = req.body;
    if(username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
        const token = generateToken(req.body);
        res.status(200).json({message: `Welcome back Alex`, token})
    } else {
        res.status(401).json({message: 'invalid credentials'})
    }
})

module.exports=router;