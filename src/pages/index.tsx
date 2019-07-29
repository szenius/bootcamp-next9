import Segment from 'app/layouts/Segment';
import Link from 'app/components/Link';

const HomePage = (): JSX.Element => (
    <Segment>
        <h1>Workshop</h1>
        <div className='margin-top-16' />
        <Link title='View attendance' href='/workshop/attendance' />
    </Segment>
);

export default HomePage;