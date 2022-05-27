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

const App = () => {

   let [todolists, setTodolists] = useState<Array<TodolistsType>>([
      {id: v1(), title: "What to lern", filter: 'All'},
      {id: v1(), title: "What to buy", filter: 'Completed'},
   ])


   let [tasks, setTasks] = useState([
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "React&JS", isDone: false},
      {id: v1(), title: "RestAPI", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false}
   ])

   // let [filter, setFilter] = useState<FilterValueType>("All")

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


   const changeFilter = (todolistId:string, filterValue: FilterValueType) => {
      // setFilter(filterValue)
   }

   return (
      <div className="App">
         {
            todolists.map((tl) => {
               let tasksFilter = tasks;
               if (tl.filter === 'Active') {
                  tasksFilter = tasks.filter(el => !el.isDone)
               }
               if (tl.filter === 'Completed') {
                  tasksFilter = tasks.filter(el => el.isDone)
               }

               return (
                  <Todolist
                     key={tl.id}
                     todolistId={tl.id}
                     title={tl.title}
                     tasks={tasksFilter}
                     removeTask={removeTask}
                     changeFilter={changeFilter}
                     addTask={addTask}
                     changeStatusCheckbox={changeStatusCheckbox}
                     filter={tl.filter}
                  />
               )
            })
         }
      </div>
   );
};

export default App;