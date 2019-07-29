import { useState } from 'react';

import Button from 'app/components/Button';
import Input from 'app/components/Input';
import Link from 'app/components/Link';
import Segment from 'app/layouts/Segment';
import AttendeeRow from 'app/composites/AttendeeRow';

const AttendancePage = (): JSX.Element => {

    const [newAttendee, setNewAttendee] = useState('');

    const addAttendee = (): void => {
        if (newAttendee) {
            setNewAttendee('');
        }
    }

    return (
        <Segment>
            <div className='margin-top-16' />
            <Link title='Back to home' href='/' />
            <h2 className='margin-top-24'>Attendance</h2>
            <p className='margin-top-8'>
                The Attendance for the Deployment workshop.
                Attendees will receive training for basic
                deployment fundamentals in roughly 1.5 hrs.
            </p>
            <div className='row margin-top-40'>
                <Input placeholder='Attendee name' value={newAttendee} onTextChange={setNewAttendee} />
                <Button title='Add' onClick={addAttendee} />
            </div>
            <div className='margin-top-48' />
            {/* <AttendeeRow name='Ryan' /> */}
        </Segment>
    )
};

export default AttendancePage;