import FieldLayout from './FieldLayout';

export default function Field(props) {
    const clickToSquere = (event) => {
        const clickedButton = event.target;
        if (!clickedButton.innerText && !props.isGameEnded) {
            clickedButton.innerText = props.currentPlayer;
            props.setCurrentPlayer(props.currentPlayer === 'X' ? 'O' : "X");
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
