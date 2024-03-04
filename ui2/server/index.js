const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const cheerio = require('cheerio')
const axios = require('axios')
const searchController = require('./controller/controller')
const app = express()


app.use(
    cors({
        credentials: true,
        origin: 'http://127.0.0.1:5500',
    })
)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/:city', searchController)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})