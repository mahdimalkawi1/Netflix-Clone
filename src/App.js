import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './components/FavList/FavList';
import { Navbarr } from './components/Navbar/Navbar';
import {   Route, Routes } from 'react-router-dom';


function App() {
  return (
    // <>
    //   {/* <Home/> */}
    // </>
    <>
    <Navbarr />
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/FavList' element={<FavList />} ></Route>
    </Routes>


  </>
  );
}

export default App;
