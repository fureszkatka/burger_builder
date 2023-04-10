const Sequelize = require("sequelize")


const sequelize = new Sequelize('my_burger', 'user', 'koko', {
    host: 'localhost',
    dialect: 'mysql'
});

const Ingredients = sequelize.define('Ingredients', {
    ingredients: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "my_burger",modelName:"Ingredients"
});

module.exports = {addIngredients : async(req,res) =>{

    await sequelize.sync();

    const ingredient = await Ingredients.create({
        ingredients: req.body.ingredient
    })
}}
