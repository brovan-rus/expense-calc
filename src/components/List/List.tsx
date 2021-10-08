import { FC } from 'react';
import cn from 'classnames/bind';
import { IItem } from '../App';
import { Input } from '../Input';

import styles from './List.module.css';
import { Button } from '../Button';

const cx = cn.bind(styles);

interface IList {
  itemsList: IItem[];
}

export const List: FC<IList> = ({ itemsList }) => {
  return (
    <ul className={cx('list')}>
      {itemsList.map((item, i) => (
        <li className={cx('element')} key={i}>
          <form className={cx('form')}>
            <Input
              value={Object.keys(item).toString()}
              name={i.toString()}
              view="secondary"
            />
            <div className={cx('priceContainer')}>
              <Input
                value={Object.values(item).toString()}
                name={i.toString()}
                view="secondary"
                align="right"
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
