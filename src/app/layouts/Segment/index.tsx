import React from 'react';
import './styles.scss';

const Segment = (props: React.PropsWithChildren<{}>): JSX.Element => (
    <div className='layout'>
        {props.children}
    </div>
);

export default Segment;