import React, {useState} from 'react';
import {buttonNameType} from "./App";

type PropsType = {
   title: string
   tasks: Array<TasksType> //возможна еще и такая запись TasksType[]
   removeTask: (id: number) => void
   // filterTasks:(nameButton:buttonNameType)=>void
}
type TasksType = {
   id: number
   title: string
   isDone: boolean
}
export const Todolist = (props: PropsType) => {

   let [filteredTasks, setfilteredTasks] = useState<buttonNameType>('All')
   let filterTasks = (nameButton: buttonNameType) => {
      setfilteredTasks(nameButton)
   }

   const obertkaDrushlag = () => {
      // let durshlag = props.tasks
      // if (filteredTasks === 'Active') {
      //    durshlag = props.tasks.filter(el => !el.isDone)
      // }
      // if (filteredTasks === 'Completed') {
      //    durshlag = props.tasks.filter(el => el.isDone)
      // }
      // return durshlag

      //   тоже самое только на swich case
      switch (filteredTasks) {
         case 'Active': {
            return props.tasks.filter(el => !el.isDone)
         }
         case 'Completed': {
            return props.tasks.filter(el => el.isDone)
         }
         default:
            return props.tasks
      }
   }


   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input/>
            <button>+</button>
         </div>
         <ul>
            {obertkaDrushlag().map((el) => {
               return (
                  <li key={el.id}>
                     <button onClick={() => props.removeTask(el.id)}>x</button>
                     <input type="checkbox" checked={el.isDone}/>
                     <span>{el.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button onClick={() => filterTasks('All')}>All</button>
            <button onClick={() => filterTasks('Active')}>Active</button>
            <button onClick={() => filterTasks('Completed')}>Completed</button>
         </div>
      </div>
   );
};