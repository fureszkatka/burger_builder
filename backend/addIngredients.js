const Sequelize = require("sequelize")


const sequelize = new Sequelize('my_burger', 'root', 'koko', {
    host: 'localhost',
    dialect: 'mysql'
});

const Ingredients = sequelize.define('Ingredients', {
    
    burger_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    ingredient: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Ingredients",modelName:"Ingredients"
});

exports.addIngredients = async(req,res) =>{

    await sequelize.sync();

    for(i = 0;i < req.body.ingredient.length; i++){
        console.log(req.body.ingredient[i])
        const ingredient = await Ingredients.create({
            ingredient: req.body.ingredient[i],
            burger_id: i
        })
    }
}
