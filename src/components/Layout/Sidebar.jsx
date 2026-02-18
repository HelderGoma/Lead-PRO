import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { main, brand, upgrades, hall, games, vector, cards } from '../../assets/images/images';

export default function Sidebar({ isOpen, setIsOpen }) {
  const menu = [
    { name: 'Главная', path: '/home', icon: main },
    { name: 'Игры', path: '/games', icon: cards },
    { name: 'Обновления', path: '/updates', icon: upgrades },
    { name: 'Бренды', path: '/brands', icon: brand },
    { name: 'Провайдеры', path: '/providers', icon: vector },
    { name: 'Бонусы', path: '/bonuses', icon: hall },
    { name: 'Приложения', path: '/apps', icon: games },
  ];

  return (

    <> {isOpen && (
      <div className={styles.overlay} onClick={() => setIsOpen(false)} />
    )}
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <nav className={styles.nav}>
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
              }
            >
              <img className={styles.icon} src={item.icon} alt="" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}