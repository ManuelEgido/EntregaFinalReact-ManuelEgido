import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.css';

const ItemCard = ({product}) => {

    return (
        <Link to={`/product/${product.id}`}>
            <div id='divContainerProducts'>
                <Card className='itemCards' style={{ width: '16rem', height: '27rem' }}>
                    <Card.Img className='cardsImg' variant="top" src={product.img} style={{height: '50%'}}/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="outline-success" className="buyButton">Buy product</Button>
                    </Card.Body>
                </Card>
            </div>
        </Link>
    );
}

export default ItemCard;