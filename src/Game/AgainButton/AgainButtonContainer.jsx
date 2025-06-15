import AgainButtonLayout from "./AgainButtonLayout";

export default function AgainButton(props) {
    const goAgainFunc = () => {
        props.setIsGameEnded(false);
        props.setIsDraw(false);
        props.setCurrentPlayer('X');
        props.setField([
            '','','',
            '','','',
            '','',''
        ])
    }

    return (
        <AgainButtonLayout
            isGameEnded={props.isGameEnded} goAgainFunc={goAgainFunc}
        />
    )
}
