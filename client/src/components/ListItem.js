import TickIcon from './TickIcon';
import ProgressBar from './ProgressBar';
import Modal from './Modal';
import { useState } from 'react';

function ListItem({task}) {
  const [showModal, setShowModal] = useState(false);
  
    return (
      <li className="list-item">
        <div className='info-container'>
          <TickIcon />
          <p className="task-title">{task.title} {task.progress} {task.date}</p>
          <ProgressBar />
        </div>
        <div className='button-container'>
          <button className='edit' onClick={()=>setShowModal(true)}>EDIT</button>
          <button className='delete'>DELETE</button>
        </div>
        {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task}/>}
      </li>
    );
  }
  
  export default ListItem;
  