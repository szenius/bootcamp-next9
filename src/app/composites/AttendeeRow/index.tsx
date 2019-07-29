
import './styles.scss';

interface IAttendeeRow {
    name: string;
}

const AttendeeRow = (props: IAttendeeRow): JSX.Element => (
    <div className='row row-attendee'>
        <div className='row-attendee-icon'/>
        <h4 className='row-attendee-title'>{props.name}</h4>
    </div>
)

export default AttendeeRow;