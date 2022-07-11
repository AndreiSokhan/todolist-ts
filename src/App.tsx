import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type FilterValueType = "All" | "Active" | "Completed";
export type TodolistsType = {
   id: string
   title: string
   filter: FilterValueType
}

function App() {

   let [todolists, setTodolists] = useState<Array<TodolistsType>>([
      {id: v1(), title: 'What to learn', filter: 'All'},
      {id: v1(), title: 'What to buy', filter: 'Completed'},
   ])

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

   const changeFilter = (todolistID: string, value: FilterValueType) => {
      setTodolists(todolists.map(tl => tl.id === todolistID ? {...tl, filter: value} : tl))
   }

   return (
      <div className="App">
         {todolists.map((tl) => {

            let tasksFilter = tasks
            if (tl.filter === "Active") {
               tasksFilter = tasks.filter(t => t.isDone === false)
            }
            if (tl.filter === "Completed") {
               tasksFilter = tasks.filter(t => t.isDone === true)
            }

            return (
               <Todolist
                  key={tl.id}
                  todolistID={tl.id}
                  title={tl.title}
                  task={tasksFilter}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  addTask={addTask}
                  changeStatusCheckbox={changeStatusCheckbox}
                  filter={tl.filter}
               />
            )
         })}

      </div>
   );
}

export default App;
