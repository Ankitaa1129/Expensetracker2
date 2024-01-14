import React from 'react';
import { ReactDOM } from 'react';
import './ExpenseItem.css';



export default function ExpenseItem(props) {
 const now=new Date(props.date);
/*console.log(props.date);*/
/*const now=props.date;*/
    const month=now.toLocaleString('en-US',{month:'long'});
    const year=now.getFullYear();
   const day=now.toLocaleString('en-US',{day:'2-digit'});

console.log(day);
  return (
    <div className='expenseitem'>
      <div className='date'>
        <div className='month'>{month}</div>
        <div className='year'>{year}</div>
        <div className='day'>{day}</div>
        </div>
      <div className='first'>
        <h2>{props.title}</h2>
        <div className='price'>${props.amount}</div>
        </div>
       
    </div>
  )
}
