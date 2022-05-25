import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type FilterValueType = "All" | "Active" | "Completed";

const App = () => {

   let [tasks, setTasks] = useState([
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "React&JS", isDone: false},
      {id: v1(), title: "RestAPI", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false}
   ])

   const removeTask = (id: string) => {
      setTasks(tasks.filter((el) => el.id !== id))
   }

   const addTask = (newTitle: string) => {
      let newTask = {id: v1(), title: newTitle, isDone: false}
      setTasks([newTask, ...tasks])
   }

   const changeStatusCheckbox = (currentId: string, eventStatus: boolean) => {
      setTasks(tasks.map((el) => el.id === currentId ? {...el, isDone: eventStatus} : el))
   }

   let [filter, setFilter] = useState<FilterValueType>("All")

   const changeFilter = (filterValue: FilterValueType) => {
      setFilter(filterValue)
   }

   let tasksFilter = tasks;
   if (filter === 'Active') {
      tasksFilter = tasks.filter(el => !el.isDone)
   }
   if (filter === 'Completed') {
      tasksFilter = tasks.filter(el => el.isDone)
   }

   return (
      <div className="App">
         <Todolist
            title={"What to learn"}
            tasks={tasksFilter}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeStatusCheckbox={changeStatusCheckbox}
         />
      </div>
   );
};

export default App;