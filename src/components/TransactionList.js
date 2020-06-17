import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionList({ text, amount, id }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className='transaction'>
      <span className='transaction-text'>{text}</span>
      <span className='transaction-amount'>${amount}</span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
}

export default TransactionList;
