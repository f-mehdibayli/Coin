
const baseUrl = "http://localhost:3001"

const editCoin = async (payload) => {
    const {id,coinsTableData,coinDetailsTableData, descriptonTableData}=payload
    try {
        const res = await fetch(`${baseUrl}/admin/edit/${id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                coinsTableData,
                coinDetailsTableData,
                descriptonTableData
            })
        })
        const data= await res.json()
        return data
    } catch (err) {
        console.log('Coin put error: ',err)
    }
}

export default editCoin;