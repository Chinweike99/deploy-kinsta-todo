function ListItem({task}) {
    return (
      <div>
        <p>{task.title} {task.progress} {task.date}</p>
      </div>
    );
  }
  
  export default ListItem;
  