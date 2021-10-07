import {FC} from 'react';
import cn from 'classnames/bind';

import styles from './Container.module.css';

const cx = cn.bind(styles);
export const Container: FC = ({children}) => {
  return (
    <div className={cx('container')}>
      {children}
    </div>
  );
}

