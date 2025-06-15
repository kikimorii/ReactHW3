import styles from './Field.module.css';

export default function FieldLayout(props) {
    return (
        <ul className={styles.fieldContainer}>
            {props.field.map((squere, index) => {
                return (
                <li data-id={index} key={index}>
                    <button
                        className={styles.fieldButton}
                        onClick={props.clickSquereFunc}
                    >{squere}</button>
                </li>
                )
            })}
        </ul>
    )
}
