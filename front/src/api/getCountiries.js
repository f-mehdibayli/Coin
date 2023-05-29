const baseUrl = 'http://localhost:3001'

const getCountiries = async () => {
    try {
        const res = await fetch(`${baseUrl}/countries`)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error()
    }
}

export default getCountiries;