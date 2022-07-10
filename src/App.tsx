import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type FilterValueType = "All" | "Active" | "Completed";

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

   const addTask = (title: string) => {
      let task = {id: v1(), title: title, isDone: false}
      setTasks([task, ...tasks])
   }

   const changeStatusCheckbox = (currentId: string, eventStatus: boolean) => {
      setTasks(tasks.map((el) => el.id === currentId ? {...el, isDone: eventStatus} : el))
   }

   let [filter, setFilter] = useState();

   const changeFilter = (value: FilterValueType) => {
      setFilter(value)
   }

   let tasksFilter = tasks
   if (filter === "Active") {
      tasksFilter = tasks.filter(t => t.isDone === false)
   }
   if (filter === "Completed") {
      tasksFilter = tasks.filter(t => t.isDone === true)
   }

   return (
      <div className="App">
         <Todolist
            title={"What to learn"}
            task={tasksFilter}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeStatusCheckbox={changeStatusCheckbox}
            filter={filter}
         />
      </div>
   );
}

export default App;
