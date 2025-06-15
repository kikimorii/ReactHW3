import FieldLayout from './FieldLayout';

export default function Field(props) {
    const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
        [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
    ];

    const checkToResult = (field) => {
        const isWin = WIN_PATTERNS.some((element) => {
            const [a,b,c] = element;
            return (field[a] && field[a] === field[b] && field[b] === field[c]);
        });

        if (!isWin) {
            props.setCurrentPlayer(props.currentPlayer === 'X' ? '0' : "X")
            props.setIsDraw(field.every((element) => element));
        } else {
            props.setIsGameEnded(true);
        }
    }

    const clickToSquere = (event) => {
        const clickedButton = event.target;
        const clickedButtonID = clickedButton.parentNode.dataset.id;
        if (!props.field[clickedButtonID] && !props.isGameEnded) {
            const copyField = [...props.field];
            copyField[clickedButtonID] = props.currentPlayer;
            props.setField(copyField);
            checkToResult(copyField);
        }
    }


    return (
        <FieldLayout
            field={props.field}
            setField={props.setField}

            clickSquereFunc={clickToSquere}
        />
    )
}
