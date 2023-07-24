const bcrypt = require("bcrypt");
const user = require("../models/User");


//sign up route handler
console.log("signup wala route shuru");
exports.signup = async (req, res) => {
    

    try{
        const{name, email, password } = req.body;
        //check if user already exists
        const userExists = await user.findOne({email});
        console.log("test 1");

        if(userExists)
        {
            return res.status(400).json({
                success : false,
                message : "user already exists",
                

            });
        console.log("test 2");

        }

        //securing password
        let hashedPassword ;
        try{
            hashedPassword = await bcrypt.hash(password, 10 );
        console.log("test 3");

        }
        catch(err){
            return res.status(400).json({
                success : false,
                message : "Error in hashing password",
        

            });
        console.log("test 4");

        }

        //create user using model
        const user = await User.create({
            name, email, password:hashedPassword
            
        });
        console.log("test 5");

        return res.status(200).json({
            success: true,
            message: "User created Succesfully",
        

        });
        console.log("test 6");

    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success : false,
            message : "User cannot be registered, please try again later",
        

        });
        console.log("test 7");

    }
}
console.log("signup wala route khatam");
