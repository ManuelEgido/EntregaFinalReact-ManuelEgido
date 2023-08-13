import React, { useContext, useState} from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const [ product, setProduct ] = useState({});
    
    const clearCart = () => { setCart([])};

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (product, quantity) => {
        isInCart(product.id) ?
            setCart(cart.map(product => {
                return product.id === product.id ? { ...product, quantity: product.quantity + quantity } : product
            }))
            : 
            setCart([...cart, { ...product, quantity}]);
            console.log('cart: ', cart.length, 'product: ', product.id, product.quantity, 'quantity: ', cart.quantity);
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => { cart.reduce((acc, product) => acc + product.quantity, 0)}

    // const onAdd = (product, quantity) => {
    //     addProduct(product, quantity);
    // }

    const showCart = () => {
        console.log('Cart: ', cart);
    }

    return (
        <CartContext.Provider value={{ 
            addProduct,
            isInCart,
            removeProduct,
            clearCart,
            showCart,
            totalPrice,
            totalProducts,
            cart,
            product,
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;