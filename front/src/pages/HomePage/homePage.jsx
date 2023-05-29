import './homeStyle.css'
import { useEffect, useState } from "react";
import { getCategories } from "../../api/getCategories";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SearchComponent from '../../components/SearchComponent/searchComponent';




const HomePage = () => {
    const [categories, setCategorires] = useState([])
    const navigate=useNavigate()
    const [searchParams,setSearchParams]=useSearchParams()
    const [submitPressed,setSubmitPressed]=useState(false)
    const location=useLocation()

    useEffect(()=>{
        if(submitPressed){
            navigate({
                pathname: '/listOfCoins',
                search: location.search
            })
            setSubmitPressed(false)
        }   
    },[submitPressed])
    
    useEffect(() => {
       if(searchParams.toString().length){
        setSearchParams('')
       }
        getCategories().then(data => {
            setCategorires(data)
        })
    }, [])

    const submitHandler=(values)=>{
        setSubmitPressed(true)
        setSearchParams(values)
    }
    
    console.log("searchParams homePage: ",searchParams.toString())
    
    return (
        <div>
            <h1 className="homepage-title">HOMEPAGE</h1>
            <SearchComponent submitHandler={submitHandler}/>
            <div className="categories">
                {
                    categories.map(item => (

                        <div className="category" key={item.id}>
                            <p className="category-title">{item.title}</p>
                            <Link to={`categories/${item.id}`}>
                                <span className="category-show">Show all <b>{'>'}</b></span>
                            </Link>
                            <div>
                                <img className="category-image" src={item.image} alt='CategoryImage' />
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default HomePage;