import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './Form.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import { useForm } from '../../utils/useForm';

const cx = cn.bind(styles);
export const Form: FC = () => {
  const form = useForm();

  console.log(form.isValid);
  return (
    <form className={cx('form')}>
      <Input
        placeholder={'Название товара'}
        name="productName"
        type={'text'}
        onChange={form.handleChange}
        value={form.values.productName || ''}
        required={true}
      />
      <Input
        placeholder={'Цена товара'}
        name="productPrice"
        type="number"
        onChange={form.handleChange}
        value={form.values.productPrice || ''}
        required={true}
        step="0.01"
      />
      <Button type="submit" color="green" disabled={!form.isValid}>
        Добавить
      </Button>
    </form>
  );
};
