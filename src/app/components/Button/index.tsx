import React from 'react';
import './styles.scss';

export interface IButtonProps {
    title: string;
    onClick: () => void;
}

const Button = (props: IButtonProps): JSX.Element => (
    <button className='button' onClick={props.onClick}>
        {props.title}
    </button>
);

export default Button;