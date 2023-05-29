import { useContext } from "react";
import { UserContext } from "../context/userContext/userContext";
import { Routes ,Route, Navigate} from "react-router-dom";
import CoinsManagePage from "./pages/Coins/coinsManagePage";
import CoinEditPage from "./pages/Edit";



const AdminPanel = () => {
    const { loggedIn }=useContext(UserContext)

    return loggedIn ? (
        <Routes>
            <Route path='/' element={<CoinsManagePage/>}/>
            <Route path='edit/:id' element={<CoinEditPage/>}/>
            <Route path='add' element={<CoinEditPage/>}/>
        </Routes>
    ) : <Navigate to='/login'/>
}


 
export default AdminPanel;