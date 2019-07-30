import React from 'react';
import './styles.scss';

export interface IButtonProps {
    title: string;
    onClick: () => void;
    loading?: boolean;
}

const Button = (props: IButtonProps): JSX.Element => {

    let className = 'button';

    if (props.loading) {
        className += ' loading';
    }

    return (
        <button className={className} onClick={props.onClick} disabled={props.loading}>
            {props.title}
        </button>
    )
};

export default Button;