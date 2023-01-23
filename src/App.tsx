import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterType = 'All' | 'Active' | 'Completed'

function App() {

   let [tasks, setTasks] = useState([
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false}
   ])

   const addTask=(title:string)=>{
      let task ={ id: v1(), title: title, isDone: false};
      setTasks([task, ...tasks])
   }

   let [filteredTasks, setfilteredTasks] = useState<filterType>('All')

   const removeTask = (id: string) => {
      setTasks(tasks.filter((el) => el.id !== id))
   }

   const taskFilter = (filterValue: filterType) => {
      setfilteredTasks(filterValue)
   }

   let filter = tasks
   if (filteredTasks === 'Active') {
      filter = tasks.filter((el) => el.isDone === false)
   }
   if (filteredTasks === 'Completed') {
      filter = tasks.filter((el) => el.isDone)
   }


   return (
      <div className="App">
         <Todolist
            title="What to learn"
            tasks={filter}
            removeTask={removeTask}
            taskFilter={taskFilter}
            addTask={addTask}
         />

      </div>
   );
}

export default App;