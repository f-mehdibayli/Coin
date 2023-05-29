import { useEffect, useState } from "react";
import getCoins from "../../api/getCoins";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./listStyle.css"
import SearchComponent from "../../components/SearchComponent/searchComponent";


const ListOfCoins = () => {
    const params = useParams()
    const { id }= params
    const [coins, setCoins] = useState([])
    const navigate=useNavigate()
    const [urlSearch,setUrlSearch]=useSearchParams()
    const searchData=[...urlSearch.entries()]
    const location=useLocation()

    
    console.log("urlSearch: ",urlSearch.toString())
    console.log("location: ", location)
  
    
        // replace: true seçeneği, bir kullanıcının arama formunu gönderdiğinde, 
        // yeni arama sorgusu için URL'de yeni bir sorgu parametresi oluştururken, 
        // geçerli URL'nin yerine geçerek geçerli sayfanın geçmişindeki girdileri temizler.

    const submitHandler=(values)=>{
        setUrlSearch(values,{
            replace: true
        })
    }
    
    useEffect(() => {
        if(id && !urlSearch.toString().length){
            getCoins(id).then(data => {
                const categoryArr=[]
                data.forEach(item=>{
                    const {id,title,image,about}=item
                    categoryArr.push({
                        id,
                        title,
                        about,
                        image
                    })
                })
                setCoins(categoryArr)
            })
        }else{
            navigate({
                pathname:'/listOfCoins',
                search: location.search
            },
            {
                replace:true
            })
            getCoins('',urlSearch.toString()).then(data=>{
                const searchCoinsArr=[]
                data.forEach(item=>{
                    const {id,title,about,image,coin_id,}=item
                    searchCoinsArr.push({
                        id,
                        title,
                        about,
                        image,
                        coin_id
                    })
                })
                setCoins(searchCoinsArr)
            })
        }
    }, [urlSearch])

    const handleBack = () => {
        navigate('/')
    }
    
    return (
        <div>
            <h1 className="homepage-title">List of the coins</h1>
            <p className="back-homePage"><span onClick={handleBack}>Homepage</span>— List of the coins</p>
            <SearchComponent submitHandler={(formValues)=>submitHandler(formValues)} searchListData={searchData}/>
            <div className="coins">
                {
                    coins.map(item => (
                        <Link to={(id && !urlSearch.toString().length) ? `/coin/${item.id}`: `/coin/${item.coin_id}`}>
                            <div className="coin" key={item.id}>
                                <div>
                                    <img src={item.image} alt="CoinImage" className="coin-image"/>
                                </div>
                                <div className="coin-text">
                                    <p className="coin-title">{item.title}</p>
                                    <p className="coin-des">{item.about}</p>
                                </div>
                            </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    );
}

export default ListOfCoins