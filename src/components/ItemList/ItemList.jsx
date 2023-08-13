import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import Loader from '../Loader/Loader';
import styles from './styles.css';
// import  {getProducts}  from '../../utils/Products'

const ItemList = ({ loader, products}) => {

    return (

        <div id='divContainerMappingProducts'>
            {
                loader ? 
                    <Loader/>
                    :
                    products.map(product => 
                        <ItemCard key={product.id} product={product}/>
                    )
            }
        </div>
    )
}

export default ItemList;