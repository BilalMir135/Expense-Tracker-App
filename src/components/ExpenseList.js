import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionList from './TransactionList';

function ExpenseList() {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className='col-md-6'>
      <div className='transactions transactions-expense'>
        <h2>Transaction History</h2>
        <ol className='transaction-list'>
          {expenseTransactions.map((expenseTransaction) => (
            <TransactionList
              key={expenseTransaction.id}
              text={expenseTransaction.expenseText}
              amount={expenseTransaction.expenseAmount}
              id={expenseTransaction.id}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ExpenseList;
