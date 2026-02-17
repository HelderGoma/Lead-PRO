import styles from './GameCard.module.css';
import { pragmaticPlay } from '../../assets/images/images';

export default function GameCard({ game }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageBox}>
                <img src={game.img} className={styles.img} alt={game.title} />
                <div className={styles.playOverlay}>
                    <div className={styles.playIcon}>▶</div>
                </div>
            </div>
            <div className={styles.body}>
                <h4 className={styles.name}>{game.title}<a href="#"><img src={pragmaticPlay} alt="" /></a></h4>
            </div>
        </div>
    );
}