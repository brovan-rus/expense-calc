import {FC} from 'react';
import cn from 'classnames/bind';

import styles from './App.module.css';

const cx = cn.bind(styles);
const App: FC = () => {
  return (
    <div className={cx('app')}>
      <div className={cx('container')}>
        <h1 className={cx('title')}>Калькулятор расходов</h1>
      </div>
    </div>
  );
}

export default App;
