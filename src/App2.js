import React from 'react';

// Import CSS
import './App2.css';

import { Balance } from './Balance';
import { AccountSummary } from './AccountSummary';
import { TransactionHistory } from './TransactionHistory';
import { AddTransaction } from './AddTransaction';

import { GlobalProvider } from './GlobalState';


function App() {
  
  //let [number,setNumber] = useState(45);
  return (
    <GlobalProvider>
    <div className="container">
        <span className="title">Expense Tracker</span>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />         
    </div>
    </GlobalProvider>
  );
}

export default App;

			
				