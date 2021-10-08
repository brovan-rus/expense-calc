import { FC, useState, useEffect, useCallback } from 'react';
import cn from 'classnames/bind';

import localStorageHandler from '../../utils/LocalStorageHandler';
import { Container } from '../Container';
import { Form } from '../Form';
import { List } from '../List';
import styles from './App.module.css';
import { IChange } from '../List';

const cx = cn.bind(styles);

export interface IItem {
  [key: string]: string;
}

export const App: FC = () => {
  const [itemsList, setItemsList] = useState<IItem[]>([]);
  useEffect(() => {
    setItemsList(localStorageHandler.getFromLocalStorage('itemList'));
  }, []);

  const handleAddItem = (formValues: { [index: string]: string }) => {
    const newItem: IItem = { [formValues.itemName]: formValues.itemPrice };
    const newItemsList = [...itemsList, newItem];
    setItemsList(newItemsList);
  };

  const handleChangeList = (changes: IChange[]) => {
    changes.forEach((change) => {
      setItemsList((state) =>
        state.map((item, i) => {
          if (parseInt(change.index) === i && change.prop === 'itemName') {
            return { [change.name]: Object.values(item)[0] };
          } else if (parseInt(change.index) === i && change.prop === 'itemPrice') {
            return { [Object.keys(item)[0]]: change.name };
          } else {
            return item;
          }
        }),
      );
    });
  };

  useEffect(() => {
    localStorageHandler.saveToLocalStorage('itemList', itemsList);
  }, [itemsList]);

  return (
    <div className={cx('app')}>
      <div className={cx('container')}>
        <h1 className={cx('title')}>Калькулятор расходов</h1>
        <Container>
          <Form handleSubmit={handleAddItem} />
        </Container>
        {itemsList.length > 0 && (
          <Container>
            <List itemsList={itemsList} onChangeList={handleChangeList} />
          </Container>
        )}
      </div>
    </div>
  );
};
