exports.userSignupValidator = (req,res,next)=>{
    req.check("name", "Name is required!").notEmpty()

    req.check("email", "Email must be between 2-30 characters")
    .matches("^\\S+@\\S+\\.\\S+$")
    .withMessage("Email must follow this schema! {xxxx@xxx.xxx}")
    .isLength({
        min: 4,
        max:222
    })

    req.check("password", "Password is required!").notEmpty()
    req.check('password')
    .isLength({min:6})
    .withMessage("Password must be atleast 6 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number")

    const errors = req.validationErrors()

    if (errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next()
}