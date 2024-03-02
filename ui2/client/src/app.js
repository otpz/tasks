const formSubmit = (e) => {
    e.preventDefault()
    if (e.target.city.value) {
        const cityEng = turkishToEnglishLetters(e.target.city.value)
        fetchData(cityEng)
    }
}

const fetchData = async (city) => {
    try {
        const response = await fetch(`http://localhost:5000/${city}`, {method: 'GET'})
        const data = await response.json()
        setValuesToDom(data)
    } catch (error) {
        console.error(error)
        return error
    }
}

const setValuesToDom = (data) => {
    const spanVmaxDiesel = document.querySelector('#maxdiesel')
    const spanVproDiesel = document.querySelector('#prodiesel')
    const spanPoGas = document.querySelector('#pogas')

    spanVmaxDiesel.innerHTML = `$${data.VMaxDiesel}`
    spanVproDiesel.innerHTML = `$${data.VProDiesel}`
    spanPoGas.innerHTML = `$${data.POGas}`
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