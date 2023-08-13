import React from 'react';
import { Cart2 } from 'react-bootstrap-icons';
import { useCartContext } from '../../Context/CartContext';
import styles from './styles.css';
// import React, { useContext } from 'react';
// import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const { totalProducts } = useCartContext(); 
    // const {CompanyName} = useContext(CartContext);
    // console.log('Cart Widget = ', CompanyName);
    return (
        <div >
            <Cart2 />
            <p>{totalProducts()}</p>
        </div>
    )
}

export default CartWidget;