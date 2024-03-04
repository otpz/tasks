const axios = require('axios')
const cheerio = require('cheerio')
const dotenv = require('dotenv').config()

const useSearch = async (searchTerm) => { 

    const cityUpperCase = searchTerm.toUpperCase()
    const cityLowerCase = searchTerm.toLowerCase()

    const url = process.env.FUEL_URL + `${cityLowerCase}-akaryakit-fiyatlari`

    try {
        const data = await axios.get(url) // html içeriğini cheerio ile işle
        const $ = cheerio.load(data.data)

        // ilgili verileri al
        const VMaxDiesel = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(3) > span:nth-child(1)`).text()
        const VProDiesel = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(4) > span:nth-child(1)`).text()
        const POGas = $(`[data-disctrict-name="${cityUpperCase}"] > td:nth-child(5) > span:nth-child(1)`).text()

        return {VMaxDiesel, VProDiesel, POGas}
    }
    catch (error){
        return {error: "Şehir bulunamadı veya bir hata oluştu. Lütfen tekrar deneyin."}
    }
}

module.exports = useSearch