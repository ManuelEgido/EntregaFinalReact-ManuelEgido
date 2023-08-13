import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Loader from '../Loader/Loader';
import styles from './styles.css';

const ItemDetail = ({loader, product}) => {
    
    const [ goToCart, setGoToCart ] = useState(false);

    const { addProduct, onAdd, isInCart, removeProduct, clearCart } = useCartContext();

    return (
        <div className='item-detail-container'>
            <div className='col'>
                <h2>item detail papi</h2>
                {
                    product && !loader ? 
                        <>
                            <div className="item-detail-image-container">
                                <img src={product.img} alt={product.name} className="item-detail-image" />
                                <div className="item-detail-info-container">
                                    <h2 className="item-detail-title">{product.name}</h2>
                                    <div className="item-detail-description">{product.description}</div>
                                    <div className="item-detail-price">Price: {product.price}</div>
                                    <div className="item-detail-stock">Stock: {product.stock}</div>
                                </div>
                            </div>
                            {/* <div className="item-detail-info-container">
                                <h2 className="item-detail-title">{product.name}</h2>
                                <div className="item-detail-description">{product.description}</div>
                                <div className="item-detail-price">Price: {product.price}</div>
                                <div className="item-detail-stock">Stock: {product.stock}</div>*/}
                                <div className="item-detail-actions"> 
                                    {/* <h3>{product?.name}</h3>
                                    <h3>{product?.price}</h3>
                                    <h3>{product?.stock}</h3>
                                    <h2>{product?.description}</h2>
                                    <img src={product?.img}></img> */}

                                    {
                                        goToCart ? 
                                            <Link to='/cart' className="item-detail-action-link">Finish your purchase</Link>
                                            :
                                            <ItemCount onAdd={onAdd} addProduct={addProduct} product={product} clearCart={clearCart} isInCart={isInCart} removeProduct={removeProduct} goToCart={goToCart} />
                                    }

                                    {/* <Link to='/cart'> */}
                                    {/* <button className='btn btn-success' onClick={addProduct}>Add to cart</button> */}
                                    {/* </Link> */}

                                    <Link to='/cart' products={product}>
                                        <button className='btn btn-success     item-detail-action-button'>Go to cart</button>
                                    </Link>

                                    <Link to='/'>
                                        <button className='btn btn-success      item-detail-action-button'>Go Back</button>
                                    </Link>
                                </div>
                            {/*</div>     */}
                        </>
                        :
                        <Loader/>
                }
            </div>
        </div>
    )
}

export default ItemDetail;