
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Cart from './component/Cart';
import Wish1 from './component/Wish1';
import Header from './component/Header';
import Footer from './component/Footer';



function App() {
  return (
 


    <div className="App">
  

    
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Wish1' element={<Wish1/>}/>
      </Routes>
      <Footer/>
      
      
     
    </div>
  );
}


export default App;
