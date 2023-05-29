import { useEffect, useState } from "react";
import SearchBox from "../../../components/SearchComponent/search";
import getCoins from "../../../api/getCoins";
import './coinsManagePage.css'
import { useNavigate, useSearchParams } from "react-router-dom";
import deleteCoin from "../../../api/deteleCoin";



const CoinsManagePage = () => {
    const [adminCoins, setAdminCoins] = useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const navigate=useNavigate()

    const onSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData(e.target)
        const data=[...formData.entries()]
        setSearchParams(data)
    }

    useEffect(() => {
        if(searchParams.toString()){
            getCoins('',searchParams.toString()).then(data => {
                const searchData=[]
                data.forEach(item=>{
                    const {id,image,title,about,coin_id}=item
                    searchData.push({
                        id,
                        image,
                        title,
                        about,
                        coin_id
                    })
                })
                setAdminCoins(searchData)
            })
        }
    }, [searchParams])

    console.log('adminCoins: ',adminCoins)

    return (
        <div>
            <h1 className="homepage-title">Admin panel</h1>
            <form onSubmit={onSubmit}> 
                <SearchBox/>
            </form>
           
            <div className="admin-coins">
                {
                    adminCoins?.map(item => (
                        <div className="coin" key={item.id}>
                            <div className="coin-image">
                                <img src={item.image} alt="CoinImage" className="coin-image" />
                            </div>
                            <div className="coin-text">
                                <p className="coin-title">{item.title}</p>
                                <p className="coin-des">{item.about}</p>
                            </div>
                            <div className="change-box">
                                <div onClick={()=>navigate(`edit/${item.coin_id}`)}>Edit</div>
                                <div onClick={()=>{
                                    deleteCoin(item.id).then(()=>{
                                        setAdminCoins(prevState=> prevState.filter(elem=> elem.id !== item.id ))
                                    })
                                }}>Delete</div>
                            </div>
                        </div>
                    ))
                }
                <div onClick={()=>navigate('add')} className="admin-coins-add">
                    <div>+</div>
                    <p>Add a new coin</p>
                </div>
            </div>
        </div>
    );
}

export default CoinsManagePage;