import React, { useState } from 'react';
import styles from './styles.css';


// onAdd,
const ItemCount = ({  addProduct, product, clearCart, removeProduct }) => {

    const [ count, setCount ] = useState(1);

    // const productSetted = product;

    const addQuantity = () => {
        // onAdd();
        const addingQuantity = count + 1;
        setCount(addingQuantity);
        // console.log(count)
    }

    const removeQuantity = () => {
        removeProduct();
        const removingQuantity = count - 1;
        count > 0 ? 
            (setCount(removingQuantity))
            :
            alert("Can´t take more products off the cart")
            (setCount(0))
        // console.log(count)
    }

    const clearCartQuantity = () => {
        clearCart();
        setCount(0);
    }

    const addToCart = (productSetted, count) => {
        addProduct(productSetted, count);
    }

    return (
        <div className='itemCountContainer'>
            <h3 className='titleItemCount'>This is the item count</h3>
            <div className='quantityButtonsContainer'>
                <button 
                    className='btn btn-primary'
                    onClick={addQuantity}>
                        {'Add 1 product'}
                </button>
                <button 
                    className='btn btn-secondary'
                    onClick={removeQuantity}>
                        {'Remove 1 product'}
                </button>
                <button 
                    className='btn btn-secondary'
                    onClick={clearCartQuantity}>
                        {'Clear Cart'}
                </button>
                <button 
                    className='btn btn-secondary'
                    onClick={() => addToCart(product, count)}>
                        {'Add to Cart'}
                </button>
            </div>
            <div className='itemCountDisplay'>
                <p className='countDisplay'>
                    {
                        count > 0 ?
                            ('Count: ', count)
                            :
                            ('You have 0 products :(')
                    }
                </p>
            </div>
        </div>
    )
}

export default ItemCount;