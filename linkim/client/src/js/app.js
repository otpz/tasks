const login = async (event) => {
    event.preventDefault()

    const data = await fetch('http://localhost:3000/login.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: event.target.email.value,
            password: event.target.password.value
        })
    })

    const json = await data.json()
    console.log(json)
    location.href = "./profile.html";
}