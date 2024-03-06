const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

const app = express()


app.use(
    cors({
        credentials: true,
        origin: process.env.CORS_ORIGIN_URL,
    })
)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/login.html', (req, res) => {
    
    const {email, password} = req.body

    console.log("Request received", email, password)

    res.json({email: email, password: password})
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})