import styles from './Field.module.css';

export default function FieldLayout() {
    return (
        <ul className={styles.fieldContainer}>
            <li><button className={styles.fieldButton}>X</button></li>
            <li><button className={styles.fieldButton}>X</button></li>
            <li><button className={styles.fieldButton}>X</button></li>
            <li><button className={styles.fieldButton}>X</button></li>
            <li><button className={styles.fieldButton}>X</button></li>
            <li><button className={styles.fieldButton}>X</button></li>
            <li><button className={styles.fieldButton}>X</button></li>
            <li><button className={styles.fieldButton}>X</button></li>
            <li><button className={styles.fieldButton}>X</button></li>
        </ul>
    )
}
