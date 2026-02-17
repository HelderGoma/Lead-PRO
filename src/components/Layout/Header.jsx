import styles from './Header.module.css';
import { search, frame } from '../../assets/images/images';

export default function Header({ searchTerm, setSearchTerm }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={frame} alt="Logo" className="w-8 h-8" />
                <span className=" font-bold w-full" >LEAD PRO</span>
                <input
                    type="text"
                    placeholder="Поиск по порталу"
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className={styles.actions}>
                <button className={styles.loginBtn}>Вход</button>
                <button className={styles.regBtn}>Регистрация</button>
            </div>
        </header>
    );
}