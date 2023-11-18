import React, { useState } from "react";

function InputArea(props){
    
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote=>{
            return{
                ...prevNote,
                [name] : value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({title: "", content: ""})
        event.preventDefault();
    }

    return <div>
       <form>
         <input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>
         <textarea name="content" onChange={handleChange} value={note.content} placeholder="write a note here...." rows="3"/>
         <button onClick={submitNote}>Save</button>
       </form>
    </div>
}

export default InputArea;