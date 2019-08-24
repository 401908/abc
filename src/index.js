import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile'


const root = document.getElementById('root')

const person = {
  name:"malik",
  age: 19,
  powers: "Batman",
  car:"Batmobile"
}

// if (person.car){
//   console.log("hi")
// }else {
//   console.log("hello")
// }




ReactDOM.render(<Profile 
name={person.name}
age={person.age}
powers={person.powers}
car={person.car}
/>,root)