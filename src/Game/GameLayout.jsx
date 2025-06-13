import Information from './Information/InformationContainer';
import Field from './Field/FieldContainer';

export default function GameLayout() {
    return (
        <div className="game">
            <Information />
            <Field />
        </div>
    )
}
