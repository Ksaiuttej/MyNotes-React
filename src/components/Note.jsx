import React from "react";
import colors from "../colors";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){


  const updatedArr = props.updatedArr;

    return(
      <div className="noteBox">
        {updatedArr.map((item,id) => {

          const uid = id;

          const selectedColor = colors.find(colorItem => colorItem.id === item.color);

            // Set the background color of the note item based on the selected color
            const itemStyle = {backgroundColor: selectedColor ? selectedColor.color : "transparent"};

            return(
              <div className="note" style={itemStyle}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <button id="deletButton" onClick={ () => 
                props.handleDelete(uid)}><DeleteIcon /></button>
              </div>
            );
          })}
      </div>
    );
}

export default Note;