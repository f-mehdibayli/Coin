const baseUrl='http://localhost:3001'

export const getCategories = async() => {
    const res=await fetch(`${baseUrl}/categories`)
    const data=await res.json()
    return data 
}
