import styles from './SortBar.module.css';
import { filter } from '../../assets/images/images';

export default function SortBar({ setSortBy, setProvider }) {
  return (
    <div className={styles.sortContainer}>
      <div className={styles.fieldGroup}>
        <span className={styles.label}>Сортировать по</span>
        <select
          className={styles.select}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popular">Популярности</option>
          <option value="name">По алфавиту</option>
          <option value="new">Новинки</option>
        </select>
      </div>
      <div className={styles.fieldGroup}>
        <span className={styles.label}>Сортировать по</span>
        <select className={styles.select}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value="popular">Популярности</option>
          <option value="name">По алфавиту</option>
        </select>
      </div>
      <div className={styles.fieldGroup}>
        <span className={styles.label}>Провайдер</span>
        <select
          className={styles.select}
          onChange={(e) => setProvider(e.target.value)}
        >
          <option value="all">Выбрать</option>
          <option value="Pragmatic Play">Pragmatic Play</option>
          <option value="Hacksaw Gaming">Hacksaw Gaming</option>
          <option value="Nolimit City">Nolimit City</option>
        </select>
      </div>
      <button className={styles.filterBtn}>
        <img src={filter} alt="" />
          <path d="M3 6l9 9 9-9H3z" />
      </button>
    </div>
  );
}