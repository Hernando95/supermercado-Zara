import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - No Encontrado</h1>
            <p className={styles.message}>La página que buscas no existe.</p>
            <Link to="/" className={styles.homeLink}>Ir al Inicio</Link>
        </div>
    );
};

export default NotFound;
