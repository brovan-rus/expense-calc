import {FC} from 'react';
import cn from 'classnames/bind';

import {Container} from "../Container";
import styles from './App.module.css';

const cx = cn.bind(styles);
export const App: FC = () => {
  return (
    <div className={cx('app')}>
      <div className={cx('container')}>
        <h1 className={cx('title')}>Калькулятор расходов</h1>
        <Container />
      </div>
    </div>
  );
}

