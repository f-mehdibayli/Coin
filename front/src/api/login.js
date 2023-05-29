const baseUrl = "http://localhost:3001"

const login = async (formData) => {
    const res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (res.status !== 200) {
        if (res.status === 404) {
            throw new Error('Invalid email')
        } else {
            throw new Error('Invalid password')
        }
    }
    const data = await res.json()
    return data
}

export default login;