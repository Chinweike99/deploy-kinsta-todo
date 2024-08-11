import TickIcon from './TickIcon';
import ProgressBar from './ProgressBar';

function ListItem({task}) {
    return (
      <li className="list-item">
        <div className='info-container'>
          <TickIcon />
          <p className="task-title">{task.title} {task.progress} {task.date}</p>
          <ProgressBar />
        </div>
        <div className='button-container'>
          <button className='edit'>EDIT</button>
          <button className='deletes'>DELETE</button>
        </div>
      </li>
    );
  }
  
  export default ListItem;
  