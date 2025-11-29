import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';

// Mock data
const products = [
    { id: '1', name: 'Laptop', category: 'electronics', price: 1200, description: 'A powerful laptop.', stock: 10 },
    { id: '2', name: 'Smartphone', category: 'electronics', price: 800, description: 'A smartphone with a great camera.', stock: 15 },
    { id: '3', name: 'T-shirt', category: 'clothing', price: 25, description: 'A comfortable cotton t-shirt.', stock: 30 },
    { id: '4', name: 'Jeans', category: 'clothing', price: 50, description: 'A pair of stylish jeans.', stock: 25 },
    { id: '5', name: 'React Book', category: 'books', price: 40, description: 'Learn React from scratch.', stock: 20 },
    { id: '6', name: 'CSS Book', category: 'books', price: 30, description: 'Master modern CSS.', stock: 18 },
    { id: '7', name: 'Coffee Maker', category: 'home', price: 60, description: 'Brews the best coffee.', stock: 8 },
    { id: '8', name: 'Desk Lamp', category: 'home', price: 35, description: 'A modern and stylish desk lamp.', stock: 12 },
    { id: '9', name: 'Lego Set', category: 'toys', price: 75, description: 'A fun Lego building set.', stock: 7 },
    { id: '10', name: 'Action Figure', category: 'toys', price: 15, description: 'A popular action figure.', stock: 40 },
    { id: '11', name: 'Basketball', category: 'sports', price: 20, description: 'An official size basketball.', stock: 22 },
    { id: '12', name: 'Yoga Mat', category: 'sports', price: 25, description: 'A comfortable yoga mat.', stock: 13 },
];

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const getProduct = new Promise((resolve) => {
            setTimeout(() => {
                const product = products.find(p => p.id === id);
                resolve(product);
            }, 500);
        });

        getProduct.then((product) => {
            setItem(product);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
