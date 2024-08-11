import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem"

function App() {
  const userEmail = "innocent@testgmail.com";
  const [tasks, setTasks] = useState(null);

  const getData = async () =>{
    try {
        const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
        // console.log(response.json());
        const json = await response.json();
        setTasks(json);  
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getData();
  }, []);

  console.log(tasks);

  // To get tasks by date, sort method can be used..
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date)); // The ? checks if the task exists

  return (
    <div className="App">
      <ListHeader listName={'🖥️A TodoList for the Festivity🪙... '} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task}/>)}
    </div>
  );
}

export default App;
