import React from 'react';
import store, {
    SIGN_UP_FIELD_CHANGED, fieldChange,
    SIGN_UP_FORM_CHANGED, formChange
} from './store';

describe('SignUp store actions test', () => {
    it('should create an action to update input field value', () => {
        const data = { name: 'email', value: 'mail@test.com' };

        const expectedAction = { type: SIGN_UP_FIELD_CHANGED, data }

        expect(fieldChange(data)).toEqual(expectedAction);
    });

    it('should create an action to update form state', () => {
        const data = { formErrors: { email: 'is invalid' } };

        const expectedAction = { type: SIGN_UP_FORM_CHANGED, data }

        expect(formChange(data)).toEqual(expectedAction);
    });
});

let initialState;
describe('SignUp reducer test', () => {
    beforeEach(() => {
        initialState = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            touched: {email: false, password: false}
        };
    });

    it('should return the initial state', () => {
        expect(store(undefined, {})).toEqual(initialState);
    })

    it('should handle SIGN_UP_FIELD_CHANGED', () => {
        const data = { name: 'email', value: 'mail@test.com' };

        const updatedState = { ...initialState, [data.name]: data.value }

        expect(store({...initialState}, {
                type: SIGN_UP_FIELD_CHANGED,
                data
            })
        ).toEqual(
            updatedState
        );
    });

    it('should handle SIGN_UP_FORM_CHANGED', () => {
        const data = { touched: { email: true, password: true } };

        const updatedState = { ...initialState, ...data }

        expect(store({...initialState}, {
                type: SIGN_UP_FORM_CHANGED,
                data
            })
        ).toEqual(
            updatedState
        );
    });
});