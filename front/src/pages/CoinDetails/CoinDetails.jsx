import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getCoinDetails from "../../api/getCoinDetails";
import './CoinDetailsStyle.css'


const CoinDetails = () => {
    const params = useParams()

    const { id } = params
    const navigate = useNavigate()
    const [coinData, setCoinData] = useState({
        coinDetails: '',
        coinDescription: ''
    })

    useEffect(() => {
        const handleKeyBack = (event) => {
            if (event.key === 'Backspace') {
                navigate(-1)
            }
        }
        window.addEventListener('keydown', handleKeyBack)
        return () => {
            window.removeEventListener('keydown', handleKeyBack)
        }
    }, [navigate])

    useEffect(() => {
        getCoinDetails(id).then(data => {
            setCoinData(
                prevState => ({
                    ...prevState,
                    coinDetails: data[0],
                    coinDescription: data[1]
                })
            )
        })
    }, [id])

    const{image,back_image,about,composition,denomination,weight_symbol,
          issuing_country,price,quality,title,weight,year,currency_symbol}=coinData.coinDetails

    const {description}=coinData.coinDescription

    console.log('coinData.coinDetails: ',coinData.coinDetails)
    
    return ( 
        <div className="coin-details">
            <div className="coin-details-image">
                <div>
                    <img src={image} alt="CoinFrontImage"/>
                </div>
                <div>
                    <img src={back_image} alt="CoinBackImage"/>
                </div>
            </div>
            <div className="coin-description">
                <div>
                    <h1>{title}</h1>
                    <div className="coin-desc">
                        <p className="coin-desc-text">{about}</p>
                        <p className="coin-desc-text">{description}</p>
                    </div>
                    <div className="data-table">
                        <div className="data-label">
                            <div>Issuing Country</div>
                            <div>Composition</div>
                            <div>Quality</div>
                            <div>Denomination</div>
                            <div>Year</div>
                            <div>Weight</div>
                            <div>Price</div>
                        </div>
                        <div className="data-value">
                            <div>{issuing_country}</div>
                            <div>{composition}</div>
                            <div>{quality}</div>
                            <div>{denomination}</div>
                            <div>{year}</div>
                            <div>{weight} {weight_symbol}</div>
                            <div>{price} {currency_symbol}</div>
                        </div>
                    </div>
                </div>
                <p className="backPage" onClick={()=>navigate(-1)}>Back to the list</p>
            </div>
        </div>
     );
}

export default CoinDetails;