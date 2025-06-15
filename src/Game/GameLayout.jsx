import Information from './Information/InformationContainer';
import Field from './Field/FieldContainer';

export default function GameLayout(props) {
    return (
        <div className="game">
            <Information
                currentPlayer={props.currentPlayer}
                isDraw={props.isDraw}
                isGameEnded={props.isGameEnded}
            />
            <Field
                currentPlayer={props.currentPlayer}
                setCurrentPlayer={props.setCurrentPlayer}

                field={props.field}
                setField={props.setField}
                isGameEnded={props.isGameEnded}
                setIsGameEnded={props.setIsGameEnded}

                isDraw={props.isDraw}
                setIsDraw={props.setIsDraw}
            />
        </div>
    )
}
