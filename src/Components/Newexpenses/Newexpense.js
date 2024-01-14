import React from 'react';
import './Newexpense.css';
import Form from './Form';

export default function Newexpense(props) {
    const saveexpensedatahandler=(enteredexpensedata)=>{
      
   const expensedata={
   ...enteredexpensedata,
    id:Math.random().toString()
  }
  props.onaddexpense(expensedata);
    console.log(expensedata);
};
    

  return (
    <div className='newexpense'>
      <Form onsavedata={saveexpensedatahandler}/>
      
    </div>
  );
}
