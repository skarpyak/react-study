export const SIGN_UP_FIELD_CHANGED = 'SIGN_UP_FIELD_CHANGED'
export const SIGN_UP_FORM_CHANGED = 'SIGN_UP_FORM_CHANGED'

const initialState = {
    email: '',
    password: '',
    formErrors: {email: '', password: ''},
    touched: { email: false, password: false }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_FIELD_CHANGED:
            return {
                ...state,
                [action.data.name]: action.data.value
            }
        case SIGN_UP_FORM_CHANGED:
            return { ...state, ...action.data }
        default:
            return state
    }
}

export const fieldChange = (data) => {
    return { type: SIGN_UP_FIELD_CHANGED, data }
}

export const formChange = (data) => {
    return { type: SIGN_UP_FORM_CHANGED, data }
}