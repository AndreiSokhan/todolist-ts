import React from 'react';
import {buttonNameType} from "./App";

type PropsType = {
   title: string
   tasks: Array<TasksType> //возможна еще и такая запись TasksType[]
   removeTask:(id:number)=>void
   filterTasks:(nameButton:buttonNameType)=>void
}
type TasksType = {
   id: number
   title: string
   isDone: boolean
}
export const Todolist = (props: PropsType) => {

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input/>
            <button>+</button>
         </div>
         <ul>
            {props.tasks.map((el) => {
               return (
                  <li key={el.id}>
                     <button onClick={()=>props.removeTask(el.id)}>x</button>
                     <input type="checkbox" checked={el.isDone}/>
                     <span>{el.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button onClick={()=>props.filterTasks('All')}>All</button>
            <button onClick={()=>props.filterTasks('Active')}>Active</button>
            <button onClick={()=>props.filterTasks('Completed')}>Completed</button>
         </div>
      </div>
   );
};