import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// TODO main component
import {TransactionsProvider} from "./context/TransactionContext";

ReactDOM.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </TransactionsProvider>,
  
  document.getElementById('root')
)
