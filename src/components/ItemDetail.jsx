import ItemCount from './ItemCount';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ item }) => {

    const handleOnAdd = (quantity) => {
        // Volvemos al console.log para confirmar que el contador funciona
        console.log(`Se agregaron ${quantity} unidades de ${item.name}`);
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.title}>{item.name}</h1>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>${item.price}</p>
            <p>Stock disponible: {item.stock}</p>
            <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
        </div>
    );
};

export default ItemDetail;
