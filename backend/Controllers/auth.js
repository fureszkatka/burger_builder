const { where } = require("sequelize");
const Sequelize = require("sequelize")


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

exports.addUser = async(req,res) =>{
 
    console.log(req)

    if(res.error){
        res.status(400).json({error:res.error })
    }
    else{
        await sequelize.sync();

        const userExists = await Users.findOne({ where: { email: req.body.email } })
        if(userExists){
            return res.status(403).json({
                error: "eamil is taken!"
            })
        }
        else{
            const user = await Users.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password            
            })

            return res.status(200).json({
                message: "signup success"
            })
        }
    }
    
}
