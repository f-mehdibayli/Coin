const baseUrl = 'http://localhost:3001'

const deleteCoin = async (CoinId) => {
    try {
        const res = await fetch(`${baseUrl}/coin/${CoinId}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log('Delete Coin Error: ',error)
    }
}

export default deleteCoin;