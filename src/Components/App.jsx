import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import Note from "./Note";

function App(){
  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes, note]
    })
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return notes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }

    return <div>
      <Header/>
      <InputArea onAdd={addNote}/>
      {notes.map((noteItem, index)=>{
        return <Note 
                key={index}
                id={index}
                title={noteItem.title} 
                content={noteItem.content}
                onDelete={deleteNote}
              />
      })
    }
      <Footer/>
    </div>
}

export default App;