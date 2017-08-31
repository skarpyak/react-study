import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DemoForm from './DemoForm';

let props;
const fieldChange = jest.fn();
const formChange = jest.fn();

describe('DemoForm', () => {
  beforeEach(() => {
    props = {
      state: {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false,
        touched: {email: false, password: false}
      },
      fieldChange: fieldChange,
      formChange: formChange
    }
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoForm { ...props } />, div);
  });

  it('should call fieldChange when input value changed', () => {
    const wrapper = shallow(
      <DemoForm { ...props } />
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.find('[name="password"]').simulate('change', {target: {value: 'Hello', name: 'password'}});
    expect(fieldChange).toBeCalledWith({name: "password", value: "Hello"});
  });

  it('should call formChange when entering input', () => {
    const wrapper = shallow(
      <DemoForm { ...props } />
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.find('[name="password"]').simulate('blur', {target: {name: 'password'}});
    expect(formChange).toBeCalledWith({"touched": {"email": false, "password": true}});
  });

  it('should call formChange when buuton clicked', () => {
    const wrapper = shallow(
      <DemoForm { ...props } />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click', {target: {name: 'password'}});
    expect(formChange).toBeCalledWith({"touched": {"email": true, "password": true}});
  });
});

