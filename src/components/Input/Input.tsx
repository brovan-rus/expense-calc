import {FC, InputHTMLAttributes} from 'react';
import cn from 'classnames/bind';

import styles from './Input.module.css';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  view?: 'primary' | 'secondary'
  placeholder: string,
  name: string,
  value?: string | number,
  type: 'text' | 'number'
}

const cx = cn.bind(styles);
export const Input: FC<IInput> = ({view = 'primary', placeholder, name, value = '', onChange, type}) => {
  return (
    <input className={cx('input', {view})} placeholder={placeholder} required={true} name={name} type={type}
           minLength={type === 'text' ? 2 : undefined}
           maxLength={type === 'text' ? 31 : undefined} value={value} onChange={onChange}/>
  );
}

