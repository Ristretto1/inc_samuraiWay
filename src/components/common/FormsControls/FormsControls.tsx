import React, {FC} from 'react';
import s from './FormsControls.module.css';

type TextareaType = {
    input: any,
    meta: {
        error: any
        touched: any
    }
}

export const FormControl: FC<TextareaType> = ({input, children, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea: FC<TextareaType> = (props) => {
        const {input, children, meta, ...restProps} = props
      return (
          <FormControl {...props}><textarea {...input} {...props}/></FormControl>
    );
};

export const Input: FC<TextareaType> = (props) => {
        const {input, children, meta, ...restProps} = props
    return (
        <FormControl  {...props}><input {...input} {...props}/></FormControl>
    );
};

