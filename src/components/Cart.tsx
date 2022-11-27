import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slice/cart';
import store from '../store';

function Cart() {
  const dispatch = useDispatch();
  const states = store.getState();

  dispatch(addItem({ id: 1, name: 'test1' }));
  const renderList = states.cart.items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));
  dispatch(addItem({ id: 2, name: 'test2' }));

  return <ul>{renderList}</ul>;
}

export default Cart;
