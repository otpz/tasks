const useSearch = require('../hooks/useSearch')

const searchController = async (req, res) => {
    const {city} = req.params
    const data = await useSearch(city)

    if (!data.error){
        return res.json(data)
    } else {
        return res.status(404).json(data)
    }
}


module.exports = searchController