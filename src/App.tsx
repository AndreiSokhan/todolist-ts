import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type buttonNameType = 'All' | 'Active' | 'Completed'

function App() {

   let [tasks, setTasks] = useState([
      {id: 1, title: "HTML & CSS", isDone: true},
      {id: 2, title: "JS", isDone: true},
      {id: 3, title: "ReactJS", isDone: false}
   ])

   const removeTask = (id: number) => {
      setTasks(tasks.filter(el => el.id !== id))
   }

   //тут мы создали стейт для фильтрации
   let [filteredTasks, setfilteredTasks] = useState<buttonNameType>('All')

   let filterTasks = (nameButton: buttonNameType) => {
      setfilteredTasks(nameButton)
   }

   let durshlag = tasks
   if (filteredTasks === 'Active') {
      durshlag = tasks.filter(el => !el.isDone)
   } if (filteredTasks === 'Completed') {
      durshlag = tasks.filter(el => el.isDone)
   }


   return (
      <div className="App">
         <Todolist
            title='What to learn'
            tasks={durshlag}
            removeTask={removeTask}
            filterTasks={filterTasks}
         />
      </div>
   );
}

export default App;
