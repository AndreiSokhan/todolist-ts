import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

const App = () => {

   let [tasks, setTasks] = useState([
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: true},
      {id: 3, title: "React&JS", isDone: false},
      {id: 4, title: "RestAPI", isDone: false},
      {id: 5, title: "GraphQL", isDone: false}
   ])

   const removeTask = (removeId:number) => {
      setTasks(tasks.filter((el)=>el.id!==removeId))
   }

   return (
      <div className="App">
         <Todolist
            title={"What to lern"}
            tasks={tasks}
            removeTask={removeTask}
         />
      </div>
   );
};

export default App;