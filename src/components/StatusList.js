import './StatusList.css';
import './TubeColors.css';

function StatusList(props) {

    const getStatusColor = (value) => {
        let color;
        if (value === 0) {
            color = '';
        } else if (value === 1) {
            color = 'red';
        } else if (value > 1 && value <= 9) {
            color = 'orange';
        } else if (value > 10 ) {
            color = 'yellow';
        } else if (value === 10) {
            color = 'green';
        }
        return color;
    };    

    return (
        <ul>
            {props.lines?.map((line) => (
                <li key={line.id}>
                    <div className="item">
                        <div className={line.id}>
                            <span>{line.name}</span>
                        </div>
                        <div style={{ backgroundColor: getStatusColor(line.lineStatuses[0]?.statusSeverity) }} className="contentRight">
                            <span>{line.lineStatuses[0]?.statusSeverityDescription}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default StatusList;
