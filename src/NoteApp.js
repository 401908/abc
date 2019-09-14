import React, {useState,useEffect} from 'react'


const NoteApp = () => {

    let notesData = JSON.parse(localStorage.getItem('notes'))

    let[title,setTItle] = useState('')
    let[detail,setDetail]=useState('')
    let[notes,setNotes]=useState(notesData || [])
    

    let handleTitleChange = (e) => {
        setTItle(e.target.value)
    }

    let handleDetChange = (e) => {
        setDetail(e.target.value)
    }

    let handleClick = () => {
        setNotes([
            ...notes,
            {
                title,
                detail
            }
        ])
        console.log(...notes)
    }

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
    })

    return(
        <div>
            <h1>My Notes</h1>

            {
                notes.map((note)=>{
                    return(<div key={note.title}>
                        <h3>{note.title}</h3>
                        <p>{note.detail}</p>
                    </div>)
                })
            }
            <p>TItle</p>
            <input onChange={handleTitleChange} ></input>
            <p>Details</p>
            <textarea cols="30" rows="10" onChange={handleDetChange}></textarea>
            <br/>
            <button onClick={handleClick}>Add Notes</button>
        </div>
    )
}


export default NoteApp


    


