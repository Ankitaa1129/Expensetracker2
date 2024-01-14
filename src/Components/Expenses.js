import React from 'react';
import { ReactDOM } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';


export default function Expenses(props) {
  return (
    <div className='expenses'>
      {
        props.item.map(
          expense=>(
            <ExpenseItem 
            date={expense.date} 
            title={expense.title} 
            amount={expense.amount}
            />
    
          )
        )
      }
    
    </div>
  )
}
