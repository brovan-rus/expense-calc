import {FC, InputHTMLAttributes} from 'react';
import cn from 'classnames/bind';

import styles from './Input.module.css';

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  type?: 'primary' | 'secondary'
  placeholder: string,
  name: string,
  value?: string,
}

const cx = cn.bind(styles);
export const Input: FC<IInput> = ({type = 'primary', placeholder, name, value = '', onChange}) => {
  return (
    <input placeholder={placeholder} required={true} name={name} type="text" minLength={2}
           maxLength={31} value={value} onChange={onChange} />
  );
}

