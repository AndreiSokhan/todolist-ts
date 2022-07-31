import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type FilterValueType = "All" | "Active" | "Completed";
export type TodolistsType = {
   id: string
   title: string
   filter: FilterValueType
}
export type taskObjectType={
   [key:string]:Array<TaskPropsType>
}

function App() {
   let todolistID1 = v1();
   let todolistID2 = v1();

   let [todolists, setTodolists] = useState<Array<TodolistsType>>([
      {id: todolistID1, title: 'What to learn', filter: 'All'},
      {id: todolistID2, title: 'What to buy', filter: 'Completed'},
   ])

   let [tasks, setTasks] = useState<taskObjectType>({
      [todolistID1]: [
         {id: v1(), title: "HTML&CSS", isDone: true},
         {id: v1(), title: "JS", isDone: false},
         {id: v1(), title: "ReactJS", isDone: true},
         {id: v1(), title: "Rest API", isDone: true},
         {id: v1(), title: "GraphQL", isDone: false}
      ],
      [todolistID2]: [
         {id: v1(), title: "Milk", isDone: true},
         {id: v1(), title: "Bread", isDone: false},
         {id: v1(), title: "Beer", isDone: true},
         {id: v1(), title: "Apple", isDone: true},
         {id: v1(), title: "Computer", isDone: false}
      ],
   });

   const removeTask = (todolistID: string, newId: string) => {
      setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== newId)})
   }

   const removeTodolist = (todolistID: string) => {
      setTodolists(todolists.filter(tl=>tl.id!==todolistID))
      delete tasks[todolistID]
   }

   const addTask = (todolistID: string, title: string) => {
      let newTask = {id: v1(), title: title, isDone: false}
      setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})

      // setTasks([task, ...tasks])
   }

   const changeStatusCheckbox = (currentId: string, eventStatus: boolean) => {
      // setTasks(tasks.map((el) => el.id === currentId ? {...el, isDone: eventStatus} : el))
   }

   const changeFilter = (todolistID: string, value: FilterValueType) => {
      // setTodolists(todolists.map(tl => tl.id === todolistID ? {...tl, filter: value} : tl))
   }

   return (
      <div className="App">
         {todolists.map((tl) => {

            let tasksFilter = tasks[tl.id]
            if (tl.filter === "Active") {
               tasksFilter = tasks[tl.id].filter(t => t.isDone === false)
            }
            if (tl.filter === "Completed") {
               tasksFilter = tasks[tl.id].filter(t => t.isDone === true)
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
                  removeTodolist={removeTodolist}
               />
            )
         })}

      </div>
   );
}

export default App;
