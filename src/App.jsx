import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext.jsx';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import NavBar from './components/NavBar/NavBar';
import ItemCart from './components/Cart/ItemCart';
import styles from './styles.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className='appContainer'>
                <CartProvider value={{ CompanyName: 'Greencoding' }}>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>} />
                        <Route path='/categorie/:categorieId' element={<ItemListContainer/>} />
                        <Route path='/product/:id' element={<ItemDetailContainer/>} />
                        <Route path='/product/:id' element={<ItemDetail/>} />
                        <Route path='/cart' element={<ItemCart/>}/>
                    </Routes>
                </CartProvider>
            </div>
        </BrowserRouter>
    )
}

export default App;