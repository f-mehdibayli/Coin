const baseUrl = "http://localhost:3001"

const newAddCoin = async (newCoin) => {
    try {
        const res = await fetch(`${baseUrl}/admin/add`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCoin)
        });
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default newAddCoin;