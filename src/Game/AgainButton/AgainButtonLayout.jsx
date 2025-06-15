import styles from './AgainButton.module.css';

export default function AgainButtonLayout(props) {
    return (
        <button className={`${styles.AgainButton} ${props.isGameEnded ? `${styles.active}` : ""}`} onClick={props.goAgainFunc}>
            Начать заново
        </button>
    );
}
