import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

function App() {

   let [tasks, setTasks] = useState([
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: false},
      {id: v1(), title: "ReactJS", isDone: true},
      {id: v1(), title: "Rest API", isDone: true},
      {id: v1(), title: "GraphQL", isDone: false}
   ]);

   const removeTask = (newId: string) => {
      let filtered = tasks.filter(t => t.id !== newId);
      setTasks(filtered)
   }

   const addTask=(newTitle:string)=>{
      let newTask = {id: v1(), title: newTitle, isDone: true}
      setTasks([newTask, ...tasks])
   }

   let [filter, setFilter] = useState("All")
   const tasksFilter = (filterValue: string) => {
      setFilter(filterValue)
   }

   let chahgefilter = tasks
   if (filter === "Active") {
      chahgefilter = tasks.filter(t => t.isDone === false)
   }
   if (filter === "Completed") {
      chahgefilter = tasks.filter(t => t.isDone === true)
   }

   return (
      <div className="App">
         <Todolist
            title={"What to learn"}
            task={chahgefilter}
            removeTask={removeTask}
            tasksFilter={tasksFilter}
            addTask={addTask}
         />
      </div>
   );
}

export default App;
