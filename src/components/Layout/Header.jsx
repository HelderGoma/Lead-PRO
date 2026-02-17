import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.searchWrapper}>
                <input type="text" placeholder="Поиск по порталу" className={styles.searchInput} />
            </div>
            <div className={styles.actions}>
                <button className={styles.loginBtn}>Вход</button>
                <button className={styles.regBtn}>Регистрация</button>
            </div>
        </header>
    );
}