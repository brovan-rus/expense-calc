import { FC, FormEvent } from 'react';
import cn from 'classnames/bind';
import { IItem } from '../App';
import { Input } from '../Input';
import { useForm } from '../../utils/useForm';

import styles from './List.module.css';
import { Button } from '../Button';

const cx = cn.bind(styles);

export interface IChange {
  index: string;
  prop: string;
  name: string;
}
interface IList {
  itemsList: IItem[];
  onChangeList: (changes: IChange[]) => void;
}

export const List: FC<IList> = ({ itemsList, onChangeList }) => {
  const form = useForm();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const changes: IChange[] = [];
    Object.keys(form.values).forEach((key, i) => {
      changes[i] = {
        index: key.split('_')[1],
        prop: key.split('_')[0],
        name: form.values[key],
      };
    });
    onChangeList(changes);
    form.resetForm();
  };

  return (
    <ul className={cx('list')}>
      {itemsList.map((item, i) => (
        <li className={cx('element')} key={i}>
          <form className={cx('form')} onSubmit={handleSubmit}>
            <Input
              placeholder={Object.keys(item).toString()}
              value={form.values[`itemName_${i}`] || ''}
              name={`itemName_${i}`}
              view="secondary"
              onChange={form.handleChange}
            />
            <div className={cx('priceContainer')}>
              <Input
                placeholder={Object.values(item).toString()}
                value={form.values[`itemPrice_${i}`] || ''}
                name={`itemPrice_${i}`}
                align="right"
                onChange={form.handleChange}
                view="secondary"
              />
              <span className={cx('currency')}>р.</span>
            </div>

            <Button color={'green'} type="submit">
              Редактировать
            </Button>
            <Button color={'red'} type="button">
              Удалить
            </Button>
          </form>
        </li>
      ))}
    </ul>
  );
};
