exports.userSignupValidator = (req,res,next)=>{

    let errors = []

    if (req.body.name === "") {
        errors.push("name is required")
    }
    if (req.body.email === "") {
        errors.push("email is required")
    }
    if (req.body.password === "") {
        errors.push("password must be at least 8 digit!(numbers and letters)")
    }

    if (errors.length == 0){
        console.log("benn a nextnél")
        next()
    }
    else{
        console.log("kilép  400as kóddal")
        return res.status(400).json({error: errors[0]})
    }
    
}