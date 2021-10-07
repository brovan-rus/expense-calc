import { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames/bind';

import styles from './Input.module.css';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  view?: 'primary' | 'secondary';
  placeholder: string;
  name: string;
  value?: string | number;
  type: 'text' | 'number';
}

const cx = cn.bind(styles);
export const Input: FC<IInput> = ({
  view = 'primary',
  placeholder,
  name,
  value = '',
  onChange,
  type,
  ...restInputProps
}) => {
  return (
    <input
      className={cx('input', { view })}
      placeholder={placeholder}
      name={name}
      type={type}
      {...restInputProps}
      minLength={2}
      maxLength={31}
      value={value}
      onChange={onChange}
    />
  );
};
