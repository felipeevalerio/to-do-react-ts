import styles from './Header.module.scss';
import logoImg from '../../assets/Logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={logoImg} 
                alt="Logotipo da todo"
            />
        </header>
    );
};