exports.userSignupValidator = (req,res,next)=>{

    let errors = []

    if (req.body.name === "") {
        errors.push("name is required")
    }
    if (req.body.email === "") {
        errors.push("email is required")
    }
    if (req.body.email === "^\\S+@\\S+\\.\\S+$") {
        errors.push("email must follow this schema!")
    }
    if (req.body.password === "") {
        errors.push("password must be at least 8 digit!(numbers and letters)")
    }

    else {
        next()
    }
    
}