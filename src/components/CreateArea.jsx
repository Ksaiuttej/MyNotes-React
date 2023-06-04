import React, { useState } from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function CreateArea(props){

    // Create button
    const [create, setCreate] = useState(false)
    function createForm(){
            setCreate(true);
    }

    // Create Note

    const [createNote,setCreateNote] = useState({title: "",content:"",color:""});

    function handleChange(event){
        const {name,value} = event.target;
        
        setCreateNote( prevValue => {
            return{
                ...prevValue,
                [name] : value,
                color: Math.floor((Math.random() * 5))
            };
        });
    }

    function handleClick(event){
        if((createNote.title).length > 0 && (createNote.content).length >0){
        props.newArr(createNote);
        setCreateNote({title: "",content:"",color:""});}
        else if((createNote.title).length > 0 && (createNote.content).length <=0) {
            alert("Please enter Description of the note");
        }
        else if((createNote.title).length <= 0 && (createNote.content).length >0){
            alert("Please enter Title of the note");
        }
        else{
            alert("Please enter a title and description"); 
        }
        event.preventDefault();
    }

    return(
        <div>
         {create ?  
         (<form className="noteform" onSubmit={handleClick}>
         <input name="title" value={createNote.title} onChange={handleChange} type="text" placeholder="Title your note" />
         <textarea name="content" value={createNote.content} onChange={handleChange} rows="3" placeholder="Pen down the essence of your thoughts and ideas..."></textarea>
         <button><AddCircleRoundedIcon style={{fontSize:'2rem',color:'rgb(16, 37, 66)'}}/></button>
     </form>)  
         : 
            (<div className="d-grid gap-2 divbtn">
            <button className="btn" onClick={createForm} type="button"><EditNoteIcon style={{fontSize:'2rem'}}/>Create Note</button>
        </div>)}
            </div>
    );
}
export default CreateArea;