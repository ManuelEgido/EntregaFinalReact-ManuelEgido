import React from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContext';
import ItemCartProduct from '../ItemCartProduct/ItemCartProduct';
import styles from './styles.css';

const ItemCart = () => {

    const { product, cart, clearCart, showCart, totalPrice, removeProduct} = useCartContext();

    const order = {
        buyer: {
            name: 'Richard',
            email: 'RichardG@gmail.com',
            phoneNumber: 2215646896,
            address: 'Riobamba 8564'
        },
        items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const finishPurchase = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log('This is your purchase id: ', id))
    }

    return (
        <>
            {   
                cart.length === 0 ? 
                    <div className='divEmptyCart'>
                        <div className='divEmptyCartContent'>
                            <h2>Shhh.. The cart is empty</h2>
                            <img className='imgEmptyCart' src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt="" />
                        </div>
                    </div>
                    :
                    (cart.map(product => 
                        <div>
                            <ItemCartProduct product={product} key={product.id}/>
                            <button className='btn btn-warning' onClick={() => { removeProduct(product.id)} } >Delete Product</button>
                        </div>
                    ))
            }
            {
                cart.length === 0 ? 
                    console.log("Llename por favor")
                    :
                    <div>
                        <h2>Total: ${totalPrice()}</h2>
                        <div className='divCartButtons'>
                                <button className='btn btn-success' onClick={finishPurchase}>Finish your purchase</button>
                                <button className='btn btn-success' onClick={showCart}>Show Me The Cart</button>
                                <button className='btn btn-success' onClick={clearCart}>Clear Cart</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default ItemCart;