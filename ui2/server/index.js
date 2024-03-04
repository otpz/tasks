const express = require('express')
const cors = require('cors')
const searchController = require('./controller/controller')
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

app.get('/:city', searchController)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})