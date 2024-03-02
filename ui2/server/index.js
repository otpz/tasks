const express = require('express')
const cors = require('cors')
const cheerio = require('cheerio')
const axios = require('axios')
const app = express()

app.use(
    cors({
        credentials: true,
        origin: 'http://127.0.0.1:5500',
    })
)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/:city', (req, res) => {
    const city = req.params // { city: 'usak' }

    const cityUpperCase = city.city.toUpperCase(); // USAK
    const cityLowerCase = city.city.toLowerCase(); // usak

    const url = `https://www.petrolofisi.com.tr/akaryakit-fiyatlari/${cityLowerCase}-akaryakit-fiyatlari`

    axios.get(url)
        .then(response => {
            
            const $ = cheerio.load(response.data) // html içeriğini cheerio ile işle

            // ilgili verileri al
            const VMaxDiesel = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(3) > span:nth-child(1)`).text();
            const VProDiesel = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(4) > span:nth-child(1)`).text();
            const POGas = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(5) > span:nth-child(1)`).text();
            return res.json({VMaxDiesel, VProDiesel, POGas})
        })
        .catch(error => {
            return error
        })

    
})

const port = 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})