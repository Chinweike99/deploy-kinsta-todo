import { useState } from "react";

function Modal({mode, setShowModal, task}) {
  // const mode = 'create';

  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: task.user_email,
    title: "",
    progress: "",
    date: editMode ? "" : new Date()
  })

  const handleChange = (e) => {
    console.log("Changing", e);
    const {name, value} = e.target;

    setData(data => ({
      ...data,
      [name] : value
    }))

    console.log(data);
  }
 
    return (
      <div className="overlay">
        <div className="modal">
          <div className="formTitle">
            <h3>{mode} your task</h3>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>

          <form>
            <input maxLength={30} placeholder=" Enter task" name="title" value={data.title} required onChange={handleChange}/><br/>
            <label for="range">Drag to select your current progress ... {data.progress}%</label>
            <input id="range" required type="range" min="0" ma="100" name="progress" value={data.progress} onChange={handleChange}/>
            <input className={mode} type="submit"/>
          </form>

        </div>
      </div>
    );
  }
  
  export default Modal;
  