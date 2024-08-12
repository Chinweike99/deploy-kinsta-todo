import TickIcon from './TickIcon';
import ProgressBar from './ProgressBar';
import Modal from './Modal';
import { useState } from 'react';

function ListItem({task, getData}) {
  const [showModal, setShowModal] = useState(false);

  const deleteTodo = async () => {
    try {
      const delTodo = await fetch(`http://localhost:8000/todos/${task.id}`,{
        method: "DELETE"
      })
      if (delTodo.status === 200){
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.error(error)
    }
  }

    return (
      <li className="list-item">
        <div className='info-container'>
          <TickIcon />
          <p className="task-title">{task.title} {task.progress} {task.date}</p>
          <ProgressBar />
        </div>

        <div className='button-container'>
          <button className='edit' onClick={()=>setShowModal(true)}>EDIT</button>
          <button className='delete' onClick={deleteTodo}>DELETE</button>
        </div>
        {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} getData={getData}/>}
      </li>
    );
  }
  
  export default ListItem;
  