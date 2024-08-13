import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem"
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;
  const [tasks, setTasks] = useState(null);

  // ${process.env.REACT_APP_SEVERURL}

// AUTH
  const getData = async () =>{
    try {
        const response = await fetch(`${process.env.REACT_APP_SEVERURL}/todos/${userEmail}`);
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
      <p className="user-email">Welcome back {userEmail}</p>
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)}
      </>}
      <p className="copy-right">Creative coding🧑‍💻 ...</p>
    </div>
  );
}

export default App;
