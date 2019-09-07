import React from 'react';


const calculator = ({numberbuttons,signbuttons}) => {
  return(
    
    <div>
      {numberbuttons.map((elem)=>{
        return <button onClick={numberbuttons[elem]} key={elem}>{numberbuttons[elem]}</button>
      })}
      {signbuttons.map((elem)=>{ 
        return <button onClick={signbuttons[elem]} key={elem}>{signbuttons[elem]}</button>
      })}
      
    </div>
  )
}

export default calculator


