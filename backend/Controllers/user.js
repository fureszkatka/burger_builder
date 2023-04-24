const Sequelize = require("sequelize")

exports.userById = (req,res,next, id) =>{
    User.findById(id)
    .populate('following','_id name')
    .populate('followers','_id name')
    .exec((err,user) =>{
        if(err || !user){
            return res.status(400).json({
                error: "user not found"
            })
        }
        req.profile = user //adds a profile object in req with user info
        
        next()
    })
}


exports.getUser = (req,res) =>{

    req.profile.hashed_password = undefined
    req.profile.salt = undefined

    return res.json(req.profile)
}
