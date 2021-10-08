import { Button } from '../Button';
import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './Result.module.css';
interface IResult {
  total: string;
  handleClearList: () => void;
}

const cx = cn.bind(styles);
export const Result: FC<IResult> = ({ total, handleClearList }) => {
  return (
    <div className={cx('container')}>
      <p className={cx('text')}>Общая сумма: {total} р.</p>
      <Button color="red" onClick={handleClearList}>
        Очистить список
      </Button>
    </div>
  );
};
