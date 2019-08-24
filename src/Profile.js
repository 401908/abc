import React from 'react'





const Profile = ({name,age,powers,car}) => {
  return(
    <div>
    <p>Hello {name}</p>
    <p>Age: {age}</p>
    <p>He is secretly the {powers}</p>
    <p>{car ? car: "NO CAR"}</p>
    </div>)
}



export default Profile