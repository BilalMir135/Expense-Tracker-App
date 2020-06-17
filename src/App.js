import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import { GlobalContextProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <div className='section'>
        <GlobalContextProvider>
          <div className='row'>
            <div className='col-lg-4'>
              <Header />
              <Balance />
            </div>
            <div className='col-lg-8'>
              <AddTransaction />
              <div className='row'>
                <IncomeList />
                <ExpenseList />
              </div>
            </div>
          </div>
        </GlobalContextProvider>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className='container'>
      <div className='app-wrapper'>
        <GlobalContextProvider>
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </GlobalContextProvider>
      </div>
    </div> */
}
