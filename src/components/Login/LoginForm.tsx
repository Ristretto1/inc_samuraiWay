import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {Field} from 'redux-form';

export type LoginFormDataType ={
    login: string
    password: string
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<LoginFormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

