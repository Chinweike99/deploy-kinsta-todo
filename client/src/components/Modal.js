import { useState } from "react";
import { useCookies } from "react-cookie";

function Modal({mode, setShowModal, getData, task}) {
  // const mode = 'create';
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : "50",
    date: editMode ? task.date : new Date()
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
 
  const postData = async (e) => {
    e.preventDefault();
    try {
          const response = await fetch("http://localhost:8000/todos", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
          });
          if (response.status === 200){
            console.log("Connected");
            setShowModal(false);
            getData();
          }
          console.log(response)
    } catch (error) {
      console.error(error.message);
    }
  }


  const editData = async(e) =>{
    e.preventDefault();
    try {
        const response = await fetch(`${process.env.REACT_APP_SEVERURL}/todos/${task.id}`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
      })
      if (response.status === 200){
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  }


    return (
      <div className="overlay">
        <div className="modal">
          <div className="formTitle">
            <h3>{mode} your task</h3>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>

          <form>
            <input maxLength={60} placeholder=" Enter task" name="title" value={data.title} required onChange={handleChange}/><br/>
            <label for="range">Drag to select your current progress ... {data.progress}%</label>
            <input id="range" required type="range" min="0" ma="100" name="progress" value={data.progress} onChange={handleChange}/>
            <input className={mode} type="submit" onClick={editMode ? editData : postData}/>
          </form>

        </div>
      </div>
    );
  }
  
  export default Modal;
  