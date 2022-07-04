import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

function App() {

   let [tasks, setTasks] = useState([
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: false},
      {id: 3, title: "ReactJS", isDone: true},
      {id: 4, title: "Rest API", isDone: true},
      {id: 5, title: "GraphQL", isDone: true}
   ]);

   const removeTask = (newId: number) => {
      let tasksFilter = tasks.filter(t => t.id !== newId);
      setTasks(tasksFilter)
   }

   return (
      <div className="App">
         <Todolist
            title={"What to learn"}
            task={tasks}
            removeTask={removeTask}
         />
      </div>
   );
}

export default App;
