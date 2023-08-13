import React from 'react';
import styles from './styles.css';

const ItemCartProduct = ({product}) => {
    return (
        <div className='divItemCartProduct'>
            <div className='divColumnCartProduct'>
                <h1>{product.name}</h1>
                <p className='pItemCart'>Price: {product.price}</p>
                <p className='pItemCart'>Quantity: {product.quantity}</p>
            </div>
            <div className='divColumnCartProduct'>
                <img className='imgCart' src={product?.img} alt="" height={130}/>
            </div>
        </div>
    )
}

export default ItemCartProduct;