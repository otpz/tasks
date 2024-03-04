const spanVmaxDiesel = document.querySelector('#maxdiesel')
const spanVproDiesel = document.querySelector('#prodiesel')
const spanPoGas = document.querySelector('#pogas')
const spanCity = document.querySelectorAll('.card-description')

const formSubmit = (e) => {
    e.preventDefault()
    setLoading()
    if (e.target.city.value) {
        const cityEng = turkishToEnglishLetters(e.target.city.value)
        fetchData(cityEng)
    }
}

const fetchData = async (city) => {
    try {
        const response = await fetch(`http://localhost:3000/${city}`, {method: 'GET'})
        const data = await response.json()

        if (data.error) {
            const main = document.querySelector('#main')
            const error = document.querySelector('#error')
            
            main.classList.add('hidden')

            error.classList.remove('hidden')
            error.classList.add("grid")
            error.classList.add("place-items-center")
        }

        setValuesToDom(data, city)
    } catch (error) {
        console.error(error)
        return error
    }
}

const setLoading = () => {
    const svg = `<svg fill="#fff" class="w-icon h-icon bg-transparen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`

    spanVmaxDiesel.innerHTML = svg
    spanVproDiesel.innerHTML = svg
    spanPoGas.innerHTML = svg

    spanCity.forEach((el) => {
        el.innerHTML = '...'
    })
}

const setValuesToDom = (data, city) => {
    spanVmaxDiesel.innerHTML = `${data.VMaxDiesel}₺`
    spanVproDiesel.innerHTML = `${data.VProDiesel}₺`
    spanPoGas.innerHTML = `${data.POGas}₺`

    spanCity.forEach((el) => {
        el.innerHTML = `${city.toUpperCase()}/MERKEZ`
    })
}

const turkishToEnglishLetters = (text) => {
    const turkishLetters = {
        'ğ': 'g',
        'Ğ': 'G',
        'ı': 'i',
        'İ': 'I',
        'ç': 'c',
        'Ç': 'C',
        'ş': 's',
        'Ş': 'S',
        'ü': 'u',
        'Ü': 'U',
        'ö': 'o',
        'Ö': 'O',
        'ı': 'i',
        'İ': 'I',
        'ş': 's',
        'Ş': 'S',
        'ç': 'c',
        'Ç': 'C',
        'ğ': 'g',
        'Ğ': 'G',
    }

    return text.replace(/[ğĞıİçÇşŞüÜöÖ]/g, function(match) {
        return turkishLetters[match];
    })
}