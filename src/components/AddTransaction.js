import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
  const { addIncome } = useContext(GlobalContext);
  const [income, setIncome] = useState({ incomeText: '', incomeAmount: '' });

  const { incomeText, incomeAmount } = income;

  const incomeChange = (event) => {
    setIncome({ ...income, [event.target.name]: event.target.value });
  };

  const submitIncome = (event) => {
    event.preventDefault();
    const newIncome = {
      id: uuidv4(),
      incomeText,
      incomeAmount: Number(incomeAmount),
    };

    addIncome(newIncome);

    setIncome({
      incomeText: '',
      incomeAmount: '',
    });
  };

  const { addExpense } = useContext(GlobalContext);
  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: '',
  });

  const { expenseText, expenseAmount } = expense;

  const expenseChange = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  const submitExpense = (event) => {
    event.preventDefault();

    const newExpense = {
      id: uuidv4(),
      expenseText,
      expenseAmount: Number(expenseAmount),
    };

    addExpense(newExpense);

    setExpense({
      expenseText: '',
      expenseAmount: '',
    });
  };
  return (
    <div className='row'>
      <div className='col-md-6'>
        <form onSubmit={submitIncome}>
          <div className='input-group income'>
            <input
              type='text'
              placeholder='Add Income...'
              autoComplete='off'
              name='incomeText'
              onChange={incomeChange}
              required
              value={income.incomeText}
            />
            <input
              type='number'
              placeholder='Amount'
              autoComplete='off'
              name='incomeAmount'
              onChange={incomeChange}
              required
              value={income.incomeAmount}
            />
            <input type='submit' name='submit' />
          </div>
        </form>
      </div>
      <div className='col-md-6'>
        <form onSubmit={submitExpense}>
          <div className='input-group expense'>
            <input
              type='text'
              placeholder='Add Expense...'
              autoComplete='off'
              name='expenseText'
              onChange={expenseChange}
              required
              value={expense.expenseText}
            />
            <input
              type='number'
              placeholder='Amount'
              autoComplete='off'
              name='expenseAmount'
              onChange={expenseChange}
              required
              value={expense.expenseAmount}
            />
            <input type='submit' name='submit' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransaction;
