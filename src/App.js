import React, {useState} from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Newexpense from './Components/Newexpenses/Newexpense';


import Expenses from './Components/Expenses';

let dummyexpenses=[
  {
    id:'e1',
    title:'School Fee',
    amount:600,
    date:new Date(2023,1,11)
  },
  {
    id:'e2',
    title:'Books',
    amount:230,
    date:new Date(2022,11,21)
  },
  {
    id:'e3',
    title:'House rent',
    amount:1000,
    date:new Date(2022,6,16)
  },
  {
    id:'e4',
    title:'Food',
    amount:500,
    date:new Date(2022,2,3)
  }
];


function App() {
  const [expenses,setexpenses]=useState(dummyexpenses);


  const addexpensehandler=(expense)=>
  {
    const updatedexpense=[expense, ...expenses];
    setexpenses(updatedexpense);
  };

  return(
    <div >
     <Newexpense onaddexpense={addexpensehandler}/>
   <Expenses item={expenses}/>
</div>
);

}

export default App;
