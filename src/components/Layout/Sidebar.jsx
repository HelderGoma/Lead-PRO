import styles from './Sidebar.module.css';

export default function Sidebar() {
  const menu = ['Главная', 'Игры', 'Обновления', 'Бренды', 'Провайдеры'];
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}></div>
        LEAD PRO
      </div>
      <nav className={styles.nav}>
        {menu.map((item, idx) => (
          <button key={item} className={`${styles.navItem} ${idx === 1 ? styles.navItemActive : ''}`}>
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}