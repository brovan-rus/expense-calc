import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './Form.module.css';
import { Input } from '../Input';

const cx = cn.bind(styles);
export const Form: FC = () => {
  return (
    <form className={cx('form')}>
      <Input placeholder={'Название товара'} name={'11'} type={'text'} />
      <Input placeholder={'Цена товара'} name={'22'} type={'number'} />
      <button className={cx('button')} type="submit">
        Добавить
      </button>
    </form>
  );
};
