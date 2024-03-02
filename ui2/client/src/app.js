const formSubmit = (e) => {
    e.preventDefault()
    if (e.target.city.value) {
        const englishCity = turkishToEnglishLetters(e.target.city.value)
        console.log(englishCity)
        fetchData(englishCity)
    }
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

const fetchData = async (city) => {

    let headers = new Headers()

    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')

    const response = await fetch(`http://localhost:5000/${city}`, {method: 'GET'})
    const data = await response.json()


    setValuesToDom(data)
}

const setValuesToDom = (data) => {
    console.log(data)
    const spanVmaxDiesel = document.querySelector('#maxdiesel')
    const spanVproDiesel = document.querySelector('#prodiesel')
    const spanPoGas = document.querySelector('#pogas')

    spanVmaxDiesel.innerHTML = `$${data.VMaxDiesel}`
    spanVproDiesel.innerHTML = `$${data.VProDiesel}`
    spanPoGas.innerHTML = `$${data.POGas}`
}