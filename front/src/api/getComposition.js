const baseUrl = 'http://localhost:3001'

const getComposition = async () => {
    try {
        const res = await fetch(`${baseUrl}/composition`)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error()
    }
}

export default getComposition;