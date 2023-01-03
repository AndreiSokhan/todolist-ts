import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type filterType = 'All' | 'Active' | 'Completed'

function App() {

   let [tasks, setTasks] = useState([
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: true},
      {id: 3, title: "ReactJS", isDone: false}
   ])

   let [filteredTasks, setfilteredTasks] = useState<filterType>('All')

   const removeTask = (id: number) => {
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
         />

      </div>
   );
}

export default App;
