import React from 'react';

import './styles.scss';

export interface IInputProps {
    onTextChange?: (newValue: string) => void;
    placeholder?: string;
    value: string;
}

type TChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Input = (props: IInputProps): JSX.Element => {

    const updateValue = (event: TChangeEvent): void => {
        const value = event.target.value;
        props.onTextChange(value);
    };

    return (
        <input
            className='input box'
            placeholder={props.placeholder}
            value={props.value}
            onChange={updateValue}
        />
    );
};

export default Input;