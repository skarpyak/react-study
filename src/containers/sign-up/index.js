import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DemoForm from '../../components/DemoForm/DemoForm';
import * as store  from './store';

const SignUp = props => (
    <div>
        <DemoForm { ...props } />
    </div>
);

const mapStateToProps = (state) => {
    return {
        state: state.singUp
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fieldChange: /* istanbul ignore next */ (data) => dispatch(store.fieldChange(data)),
    formChange:  /* istanbul ignore next */ (data) => dispatch(store.formChange(data))
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)