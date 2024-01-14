import React,{useState} from 'react';
import './Form.css';

export default function Form(props) {

  const [enteredtitle,setenteredtitle]=useState('');
  const [enteredamount,setentereamount]=useState('');
  const [entereddate,setentereddate]=useState('');

  const changehandler1=(event)=>{
setenteredtitle(event.target.value);
  };
  const changehandler2=(event)=>{
    setentereamount(event.target.value);
  };
  const changehandler3=(event)=>{
    setentereddate(event.target.value);
  };

  const submitHandler=(event)=>{
  event.preventDefault();

  const expenseData={
    title:enteredtitle,
    amount:enteredamount,
    date:new Date(entereddate)
  }

  props.onsavedata();

  console.log(expenseData);
  setenteredtitle('');
  setentereamount('');
  setentereddate('');
  };

  return (
    <form onSubmit={submitHandler}>
    <div className='expensecontrols'>
      <div className='expensecontrol'>
        <label>Title</label>
        <input type="text" value={enteredtitle}  onChange={changehandler1}/>
      </div>
      <div className='expensecontrol'>
        <label>Amount</label>
        <input type="number" value={enteredamount} onChange={changehandler2}/>
      </div>
      <div className='expensecontrol'>
        <label>Date</label>
        <input type="date" value={entereddate} onChange={changehandler3}/>
      </div>      
    </div>
    <div className='expenseactions'>
      <button type='submit'>Add Expense</button>
    </div>
    </form>
  )
}
