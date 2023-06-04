import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {

  const [arr,setArr] = useState([])
  function addArray(createNote){
    setArr(prevArray =>{
      return [...prevArray,createNote]
    });
  }

  function deleteNote(id){
    return(
      setArr( prevValues =>{
        return(
          prevValues.filter((items,index) =>{
          return index !== id}
          )
        );
      })
    );
  }


  return (
    <div>
      <Header />
      <CreateArea newArr={addArray}/>
      <Note updatedArr={arr} handleDelete={deleteNote}/>
      <Footer />
    </div>
  );
}

export default App;
