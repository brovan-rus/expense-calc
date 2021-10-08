import { FC, useState, useEffect } from 'react';
import cn from 'classnames/bind';

import localStorageHandler from '../../utils/LocalStorageHandler';
import { Container } from '../Container';
import { Form } from '../Form';
import { List } from '../List';
import styles from './App.module.css';

const cx = cn.bind(styles);
export interface IItem {
  [key: string]: string;
}

export const App: FC = () => {
  const [itemsList, setItemsList] = useState<IItem[]>([]);

  const handleAddItem = (formValues: { [index: string]: string }) => {
    const newItem: IItem = { [formValues.itemName]: formValues.itemPrice };
    const newItemsList = [...itemsList, newItem];
    setItemsList(newItemsList);
    localStorageHandler.saveToLocalStorage('itemList', newItemsList);
  };

  useEffect(() => {
    setItemsList(localStorageHandler.getFromLocalStorage('itemList'));
  }, []);

  return (
    <div className={cx('app')}>
      <div className={cx('container')}>
        <h1 className={cx('title')}>Калькулятор расходов</h1>
        <Container>
          <Form handleSubmit={handleAddItem} />
        </Container>
        {itemsList.length > 0 && (
          <Container>
            <List itemsList={itemsList} />
          </Container>
        )}
      </div>
    </div>
  );
};
