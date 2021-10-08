import { FC, FormEvent } from 'react';
import cn from 'classnames/bind';

import styles from './Form.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import { useForm } from '../../utils/useForm';

const cx = cn.bind(styles);

interface IForm {
  handleSubmit: (values: { [index: string]: string }) => void;
}
export const Form: FC<IForm> = ({ handleSubmit }) => {
  const form = useForm();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(form.values);
    form.resetForm();
  };

  return (
    <form className={cx('form')} onSubmit={onSubmit}>
      <Input
        placeholder={'Название товара'}
        name="itemName"
        type={'text'}
        onChange={form.handleChange}
        value={form.values.itemName || ''}
        required={true}
      />
      <Input
        placeholder={'Цена товара'}
        name="itemPrice"
        type="number"
        onChange={form.handleChange}
        value={form.values.itemPrice || ''}
        required={true}
        step="0.01"
      />
      <Button type="submit" color="green" disabled={!form.isValid}>
        Добавить
      </Button>
    </form>
  );
};
