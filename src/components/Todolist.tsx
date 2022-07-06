import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FullInput} from "./FullInput";

type TaskPropsType = {
   id: string
   title: string
   isDone: boolean
}

type TodolistPropsType = {
   title: string
   task: Array<TaskPropsType>
   removeTask: (taskId: string) => void
   tasksFilter: (filterValue: string) => void
   addTask: (newTitle: string) => void
}

export const Todolist = (props: TodolistPropsType) => {

   const FilterHandler=(filterValue:string)=>{
      props.tasksFilter(filterValue)
   }

   const removeTaskHandler = (tID:string) => {
      props.removeTask(tID)
   }

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <FullInput callBack={props.addTask}/>
         </div>
         <ul>
            {/*   t -> это один элемент массива т.е. одна таска*/}
            {props.task.map((t, index) => {
               return (
                  <li key={index}>
                     <button onClick={()=>removeTaskHandler(t.id)}>x</button>
                     <input type="checkbox" checked={t.isDone}/>
                     <span>{t.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button onClick={()=>FilterHandler('All')}>All</button>
            <button onClick={()=>FilterHandler('Active')}>Active</button>
            <button onClick={()=>FilterHandler('Completed')}>Completed</button>
         </div>
      </div>
   );
};
