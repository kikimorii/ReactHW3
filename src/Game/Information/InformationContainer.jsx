import InformationLayout from './InformationLayout';

export default function Information(props) {
    if (props.isDraw) {
        return <InformationLayout content={'Ничья'} />
    } else if (props.isGameEnded) {
        return <InformationLayout content={`Победил: ${props.currentPlayer}`} />
    } else {
        return <InformationLayout content={`Ходит ${props.currentPlayer}`}/>
    }
}
