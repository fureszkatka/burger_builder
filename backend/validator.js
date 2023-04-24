exports.userSignupValidator = (req,res,next)=>{

    let errors = []

    if (req.body.name === "") {
        errors.push("Name is required!")
    }
    if (req.body.email === "") {
        errors.push("Email is required!")
    }
    if (req.body.password === "") {
        errors.push("Password must be at least 8 digit!(numbers and letters)!")
    }

    if (errors.length == 0){
        next()
    }
    else{
        return res.status(400).json({error: errors[0]})
    }
    
}

exports.userLoginValidator = (req,res,next)=>{

    let errors = []

    if (req.body.email === "") {
        errors.push("Email is required!")
    }
    if (req.body.password === "") {
        errors.push("Please enter a password!")
    }

    if (errors.length == 0){
        next()
    }
    else{
        return res.status(400).json({error: errors[0]})
    }
    
}