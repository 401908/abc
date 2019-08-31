import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import Person from './Person'


const root = document.getElementById('root')

let person = {
  title:'batman',
  name:'Steve',
  age:100000000,
  img:"https://springboard-cdn.appadvice.com/apptributes/105159053783768408806/1458829126301-SteveDinosaurWidgetGameBG-2191-xl.jpg",
  attributes:['weight','height']
}

const Counter = () => {
  let [count,setState] = useState(0)
  let handleclick = () => {
    setState(count+1234567890)
  }
  let handleclick2 = () => {
    setState(count-1234567890)
  }
  let handleclick3 = () => {
    setState(count-count)
  }
  
  return(
    <div>
      <p>You clicked {count}</p>
    <button onClick={(handleclick)}>Plus a little bit</button>
    <button onClick={(handleclick2)}>Minus a little bit</button>
    <button onClick={(handleclick3)}>Reset</button>
    </div>
  )
  
}

// ReactDOM.render(<Person name={person.name} 
//   age={person.age} 
//   img={person.img}
//   attributes={person.attributes}/>
//   ,root)

ReactDOM.render(<Counter />,root)



