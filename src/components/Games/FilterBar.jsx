import styles from './FilterBar.module.css';
import { CATEGORIES } from '../../data'; 

export default function FilterBar({ activeTab, setActiveTab }) {
  return (
    <div className={styles.container}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveTab(cat.id)}
          className={`${styles.filterBtn} ${activeTab === cat.id ? styles.filterBtnActive : ''}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}