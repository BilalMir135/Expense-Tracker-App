import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionList from './TransactionList';

function IncomeList() {
  const { incomeTransactions } = useContext(GlobalContext);
  return (
    <div className='col-md-6'>
      <div className='transactions transactions-income'>
        <h2>Transaction History</h2>
        <ol className='transaction-list'>
          {incomeTransactions.map((incomeTransaction) => (
            <TransactionList
              key={incomeTransaction.id}
              text={incomeTransaction.incomeText}
              amount={incomeTransaction.incomeAmount}
              id={incomeTransaction.id}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default IncomeList;
