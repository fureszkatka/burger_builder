const Sequelize = require("sequelize")


const sequelize = new Sequelize('my_burger', 'root', 'koko', {
    host: 'localhost',
    dialect: 'mysql'
});

const Ingredients = sequelize.define('Ingredients', {
    belog_to_user: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    burger_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    ingredient: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "Ingredients",modelName:"Ingredients"
});


let burger_number = 0
exports.addIngredients = async(req,res) =>{

    await sequelize.sync();
    burger_number += 1
    let userId = req.body.userId
    
    for(i = 0;i < req.body.ingredient.length; i++){

        console.log("userid: ----->", typeof(req.body.userId))

        const ingredient = await Ingredients.create({
            belong_to_user: userId,
            ingredient: req.body.ingredient[i],
            burger_id: burger_number,
        })
        
        return res.status(200).json({
            message: "Burger has been saved!"
        })
    }

}

exports.getBurgers = async (req, res) => {
    return "hey"
}