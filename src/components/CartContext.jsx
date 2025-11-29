import { createContext, useState } from 'react';

// 1. Crear el Contexto
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// 2. Crear el Proveedor del Contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        // Verificar si el item ya está en el carrito
        if (isInCart(item.id)) {
            // Si está, actualizamos la cantidad
            setCart(cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                }
                return prod;
            }));
        } else {
            // Si no está, lo agregamos
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};