
// login endpoint
const loginUser = async (req, res) => {
 
    const {email, password} = req.body
    console.log("Login request received", email, password)
    res.json({email: email, password: password})
}

const registerUser = async (req, res) => {
    const {name, surname, username, email, password} = req.body

    console.log("Register request received", name, surname, username, email, password)

    res.json("request received")
}

module.exports = {loginUser, registerUser}