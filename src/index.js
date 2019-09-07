import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import calculator from './calculator'



const root = document.getElementById('root')



let numbers = [0,1,2,3,4,5,6,7,8,9]
let signs = ['+','=','-','*']
const Calculate = () => {
  

  {return(<calculator 
  numberbuttons={numbers}
  signbuttons={signs}/>)}
  
}





// const person = {
//   name:"malik",
//   age: 19,
//   powers: "Batman",
//   car:"Batmobile"
// }

// if (person.car){
//   console.log("hi")
// }else {
//   console.log("hello")
// }




ReactDOM.render(<Calculate
/>,root)