const dotenv = require('dotenv').config()
const axios = require('axios')
const   cheerio = require('cheerio')

const searchController = async (req, res) => {

    const {city} = req.params // { city: 'usak' }
    console.log(city)

    const cityUpperCase = city.toUpperCase() // USAK
    const cityLowerCase = city.toLowerCase() // usak
    
    const url = process.env.FUEL_URL + `${cityLowerCase}-akaryakit-fiyatlari`

    try {
        const data = await axios.get(url) // html içeriğini cheerio ile işle
        const $ = cheerio.load(data.data)

        // ilgili verileri al
        const VMaxDiesel = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(3) > span:nth-child(1)`).text()
        const VProDiesel = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(4) > span:nth-child(1)`).text()
        const POGas = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(5) > span:nth-child(1)`).text()
        return res.json({VMaxDiesel, VProDiesel, POGas})
    }
    catch (error){
        // console.error(error)
        return res.status(404).json({error: "Şehir bulunamadı veya bir hata oluştu. Lütfen tekrar deneyin."})
    }
}


module.exports = searchController