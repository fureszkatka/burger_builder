const Sequelize = require("sequelize")

//Make connection with database
const sequelize = new Sequelize('my_burger', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

//Define the table and the rows for database
const Ingredients = sequelize.define('Ingredients', {
    belong_to_user: {
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
    tableName: "Ingredients", modelName: "Ingredients"
});

Ingredients.sync();

//Upload ingredient
exports.addIngredients = async (req, res) => {
    burger_number = parseInt(await Ingredients.max('burger_id')) + 1
    if (req.body.ingredient.length > 0) {
        for (i = 0; i < req.body.ingredient.length; i++) {

            console.log(req.body.ingredient[i])

            const ingredient = await Ingredients.create({
                belong_to_user: req.body.userId,
                ingredient: req.body.ingredient[i],
                burger_id: burger_number,
            })
        }

        return res.status(200).json({
            message: "Burger has been saved!"
        })
    }
    else {
        return res.json({
            error: "Please fill up your burger with some ingredient!"
        })
    }

}


//Get burgers
exports.getBurgers = async (req, res) => {

    let burgers = await Ingredients.findAll({ where: { belong_to_user: req.params.userId } })
    if (!burgers) {
        return res.json({ error: "No burger was found!" })
    }
    return res.json({ ingredients: burgers })
}


//Delete burger by id and owner id
exports.deleteBurger = async (req, res) => {

    let deleteBurger = await Ingredients.destroy({
        where: { belong_to_user: req.body.userId, burger_id: req.body.burgerId },
    });
    return res.json({
        message: `${req.body.burgerId} id burger has been removed!`
    })
}