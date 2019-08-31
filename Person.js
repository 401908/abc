import React from 'react'





const Person = ({title,name,img,age,attributes}) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{name}</p>
      <img src={img} width='500'/>
      <p>{age}</p>
      <ul>
        {attributes.map((elem)=>{
          return <li key={elem}>{elem}</li>
        })}
      </ul>
    </div>
  )
}

export default Person