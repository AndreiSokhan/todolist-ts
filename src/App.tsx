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
   let todolistsId1 = v1();
   let todolistsId2 = v1();

   let [todolists, setTodolists] = useState<Array<TodolistsType>>([
      {id: todolistsId1, title: "What to lern", filter: 'All'},
      {id: todolistsId2, title: "What to buy", filter: 'All'}
   ])

   let [tasks, setTasks] = useState({
      [todolistsId1]: [
         {id: v1(), title: "HTML&CSS", isDone: true},
         {id: v1(), title: "JS", isDone: true},
         {id: v1(), title: "React&JS", isDone: false},
         {id: v1(), title: "RestAPI", isDone: false},
         {id: v1(), title: "GraphQL", isDone: false}
      ],
      [todolistsId2]: [
         {id: v1(), title: "Milk", isDone: true},
         {id: v1(), title: "Bread", isDone: true},
         {id: v1(), title: "New car", isDone: false},
         {id: v1(), title: "Flat", isDone: false},
         {id: v1(), title: "New jeans", isDone: false}
      ]
   });

   const removeTask = (todolistId: string, taskId: string) => {
      setTasks({...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== taskId)})
   }

   const removeTodolist = (todolistId: string) => {
      setTodolists(todolists.filter(el=>el.id!==todolistId))
      delete tasks[todolistId]
   }

   const addTask = (todolistId: string, newTitle: string) => {
      let newTask = {id: v1(), title: newTitle, isDone: false}
      setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
   }

   const changeStatusCheckbox = (todolistId: string, taskId: string, eventStatus: boolean) => {
      setTasks({
         ...tasks,
         [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, isDone: eventStatus} : el)
      })
   }

   const changeFilter = (todolistId: string, filterValue: FilterValueType) => {
      //в el(элементе) здесь лежит просто внтренность нашего объекта спрэд оператор делает копию без обертки
      setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: filterValue} : el))
   }

   return (
      <div className="App">
         {
            todolists.map((tl) => {
               let tasksFilter = tasks[tl.id];
               if (tl.filter === 'Active') {
                  tasksFilter = tasks[tl.id].filter(el => !el.isDone)
               }
               if (tl.filter === 'Completed') {
                  tasksFilter = tasks[tl.id].filter(el => el.isDone)
               }

               return (
                  <Todolist
                     key={tl.id}
                     todolistId={tl.id}
                     title={tl.title}
                     tasks={tasksFilter}
                     removeTask={removeTask}
                     removeTodolist={removeTodolist}
                     changeFilter={changeFilter}
                     addTask={addTask}
                     changeStatusCheckbox={changeStatusCheckbox}
                     filter={tl.filter}
                  />
               )
            })}
      </div>
   );
};

export default App;