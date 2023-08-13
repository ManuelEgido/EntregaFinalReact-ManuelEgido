import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import styles from './styles.css';

const ItemDetailContainer = () => {

    const [ loader, setLoader ] = useState(true);

    const [ product, setProduct ] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
            .then(products => setProduct({ id: products.id, ...products.data()}))
            .finally(setLoader(false));
    }, [id])

    return (
        <div>
            <ItemDetail loader={loader} product={product}/>
        </div>
    )
}

export default ItemDetailContainer;