const Sequelize = require("sequelize")
const ejwt = require("jsonwebtoken")
require('dotenv').config()
var { expressjwt: jwt } = require("express-jwt");

const sequelize = new Sequelize('my_burger', 'root', 'koko', {
    host: 'localhost',
    dialect: 'mysql'
});

const Users = sequelize.define('Users', {
   
    name: {
        type: Sequelize.DataTypes.STRING,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        unique: true
    },
    password: {
        type: Sequelize.DataTypes.STRING,
    }
    
}, {
    tableName: "Users",modelName:"Users"
});

exports.signup = async(req,res) =>{
 
    if(res.error){
        res.status(400).json({error:res.error })
    }
    else{
        await sequelize.sync();

        const userExists = await Users.findOne({ where: { email: req.body.email } })
        if(userExists){
            return res.status(403).json({
                error: "Email is taken!"
            })
        }
        else{
            const user = await Users.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password            
            })

            return res.status(200).json({
                message: "Signup success!"
            })
        }
    }
    
}


exports.login = async (req, res) => {

    const { email, password } = req.body


    const userMatch = await Users.findOne({ where: { email: email, password: password } })
        
    if (!userMatch) {
        return res.status(401).json({
            error: "Incorrect email or password!"
        })
    }
    else {
        const token = ejwt.sign({ _id: userMatch.id }, "FDSHJFGSFDVDAGFDGSFDSFSDSREFDV")

        res.cookie("burger-token", token, { expire: new Date() + 9999 })
        const { id, name, email } = userMatch
        console.log("usermatchhhh --->>",userMatch)
        return res.json({ token, user: { id, email, name } })
    }  

}

exports.signout = (req,res) =>{
    res.clearCookie("burger-token")
    return res.json({message: "signout"})
}

exports.requireSignin = jwt({
    secret: "FDSHJFGSFDVDAGFDGSFDSFSDSREFDV",
    algorithms: ["HS256"],
    userProperty: "auth"
})