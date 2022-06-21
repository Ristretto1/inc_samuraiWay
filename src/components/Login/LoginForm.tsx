import React from 'react';
import {reduxForm} from 'redux-form';
import {Field} from 'redux-form';


export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'Login'} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'Password'} placeholder={'Password'} component={'input'}/>
            </div>
            <div>
                <Field name={'remember me'} type={'checkbox'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)