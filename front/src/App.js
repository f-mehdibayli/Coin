import './App.css';
import HomePage from './pages/HomePage/homePage';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import ListOfCoins from './pages/ListOfCoins/list';
import CoinDetails from './pages/CoinDetails/CoinDetails';
import LoginPage from './admin/pages/Login/login';
import UserContextProvider from './context/userContext/userContext';
import AdminPanel from './admin/adminIndex';

function App() {
  return (
    <div className="app">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/categories/:id' element={<ListOfCoins />} />
            <Route path='/listOfCoins' element={<ListOfCoins />} />
            <Route path='/coin/:id' element={<CoinDetails />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/admin/*' element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
