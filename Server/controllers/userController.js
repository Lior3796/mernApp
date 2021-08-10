const bcryptjs = require("bcryptjs");

async function getUser(req, res) {
    const { firstName, lastName, email, password, birthday } = req.body;
    try {
        await studentModel.findOne({ email: email }, (err, student) => {
            if (student) {
                res.status(400).json({ email: "Email already exists" })
            }
            else {
                bcryptjs.genSalt(10, (err, salt) => {
                    bcryptjs.hash(email, salt, (err, hash) => {
                        if (err) throw err;
                        password = hash;


                    })
                })
                console.log(result);
                res.json({ message: "success", data: result })
            }

        })
    } catch (err) {
        res.json({ message: "database problem", error: err })
    }