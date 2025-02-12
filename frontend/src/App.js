import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Clients from './Pages/Clients';
import Products from './Pages/Products';
import Home from './Pages/Home';
import TopProducts from './Pages/TopProducts';
import TopClient from './Pages/TopClient';
import LastMonthTotal from './Pages/LastMonthTotal';
import NewProduct from './Pages/NewProduct';
import DeleteProduct from './Pages/DeleteProduct';
import UpdateProduct from './Pages/UpdateProduct';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home/>}/>                     
                <Route path="/products" element ={<Products/>}/>  
                <Route path="/newproduct" element ={<NewProduct/>}/>
                <Route path="/updateproduct" element ={<UpdateProduct/>}/>
                <Route path="/deleteproduct" element ={<DeleteProduct/>}/>
                <Route path="/clients" element ={<Clients/>}/>
                <Route path="/topproducts" element ={<TopProducts/>}/>  
                <Route path="/topclient" element ={<TopClient/>}/>  
                <Route path="/lastmonthtotal" element ={<LastMonthTotal/>}/>  
            </Routes>
        </BrowserRouter>
    );
    
}

export default App;
