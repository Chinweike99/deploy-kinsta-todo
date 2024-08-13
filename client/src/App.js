import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem"
import Auth from "./components/Auth";

function App() {
  const userEmail = "innocent@testgmail.com";
  const [tasks, setTasks] = useState(null);

  // ${process.env.REACT_APP_SEVERURL}

// AUTH
  const authToken = false

  const getData = async () =>{
    try {
        const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
        const json = await response.json();
        setTasks(json);  
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    if (authToken){
      getData();
    }
  }, []);

  console.log(tasks);

  // To get tasks by date, sort method can be used..
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date)); // The ? checks if the task exists

  return (
    <div className="App">
      {!authToken && <Auth />}
      {authToken && 
      <>
      <ListHeader listName={'🖥️A TodoList for the Festivity🪙... '} getData={getData}/>
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)}
      </>}
    </div>
  );
}

export default App;
