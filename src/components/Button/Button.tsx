import { FC, ButtonHTMLAttributes } from 'react';
import cn from 'classnames/bind';

import styles from './Button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button';
  color: 'green' | 'red';
}

const cx = cn.bind(styles);

export const Button: FC<IButton> = ({
  children,
  type = 'button',
  color,
  ...restProps
}) => {
  return (
    <button className={cx('button', color)} type={type} {...restProps}>
      {children}
    </button>
  );
};
