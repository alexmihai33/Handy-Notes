import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    const [expand, setExpand] = useState(false);

    function handleExpand(){
      setExpand(true);
    }

    function handleChange(event){
        const value = event.target.value;
        const name =  event.target.name
        setNote( (prevValue) => {
            return {
                ...prevValue,
                [name]:value
        }
    });
    }

    return (
      <div>
        <form className="create-note">
          {expand?<input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>:null}
          <textarea name="content" placeholder="Take a note..." rows={expand?"3":"1"} onChange={handleChange} onClick={handleExpand} value={note.content}/>
          <Zoom in={expand}>
            <Fab onClick={()=>{
              props.onAdd(note);
              setNote({title:"", content:""})
              event.preventDefault();
            }}><AddIcon/></Fab>
          </Zoom>
        </form>
      </div>
    );
  }
  
  export default CreateArea;