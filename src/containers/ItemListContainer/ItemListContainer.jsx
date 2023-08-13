import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from '../../components/ItemList/ItemList';
import styles from './styles.css';


const ItemListContainer = () => {

    const [ loader, setLoader ] = useState(true);

    const [ products, setProducts ] = useState([]);

    const { categorieId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categorieId) {
            const queryFiltered = query(queryCollection, where('categorie', '==', categorieId));
            getDocs(queryFiltered)
                .then(product => setProducts(product.docs.map(product => ({ id: product.id, ...product.data()}))))
                .finally(setLoader(false));
        } else {
            getDocs(queryCollection)
                .then(product => setProducts(product.docs.map(product => ({ id: product.id, ...product.data()}))))
                .finally(setLoader(false));
        }
    }, [categorieId])

    return (
        <div id='divDisplayItemsList'>
            <ItemList loader={loader} products={products}/>
        </div>
    )
}

export default ItemListContainer;