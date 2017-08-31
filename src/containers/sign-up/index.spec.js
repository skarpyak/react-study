import React from 'react';
import SignUp from './index';
import DemoForm from '../../components/DemoForm/DemoForm';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

const storeFake = (state) => {
    return {
        default: () => {},
        subscribe: () => {},
        dispatch: () => {},
        getState: () => {
            return { ...state };
        },
    };
};

let store;
let Component;
describe('SignUp (container) ', () => {
    beforeEach(() => {
        store = storeFake({
            singUp: {
                email: '',
                password: '',
                formErrors: {email: '', password: ''},
                touched: { email: false, password: false }
            }
        })

        const wrapper = mount(
            <Provider store={store}>
                <SignUp />
            </Provider>
        );

        Component = wrapper.find(SignUp);
    });

    it('should exist', () => {
        expect(Component).toBeDefined();
    });

    it('should render container', () => {
        expect(Component.containsMatchingElement(<DemoForm />));
    });
});