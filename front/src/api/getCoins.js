const baseUrl = 'http://localhost:3001'

const getCoins = async (category_id, search_query) => {
   if (category_id) {
      const res = await fetch(`${baseUrl}/coins/${category_id}`)
      const data = await res.json()
      return data
   } 
   else {
      const res = await fetch(`${baseUrl}/listOfCoins?${search_query}`)
      const data = await res.json()
      return data
   }
}

export default getCoins;