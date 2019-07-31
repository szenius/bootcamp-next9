import React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';

describe('<Button />', () => {
    it('should render a [button] when called with name [Add]', () => {
        const mockAction = jest.fn()
        const component = shallow(<Button title='Add' onClick={mockAction} />);
        expect(component.type()).toBe('button');
        expect(component.prop('children')).toEqual('Add');
    })

    it('should render a [loading] class when loading prop is assigned to [button]', () => {
        const mockAction = jest.fn()
        const component = shallow(<Button title='Add' onClick={mockAction} loading={true} />);
        expect(component.type()).toBe('button');
        expect(component.prop('className')).toContain('button-loading');
    })
});