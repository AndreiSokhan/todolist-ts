import React from 'react';
import {filterType} from "./App";

type TodolistPropsType = {
   title: string
   tasks: Array<TaskPropsType>
   removeTask: (id: number) => void
   taskFilter: (filterValue: filterType) => void
}

type TaskPropsType = {
   id: number
   title: string
   isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
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
                     <button onClick={() => {
                        props.removeTask(el.id)
                     }}>x
                     </button>
                     <input type="checkbox" checked={el.isDone}/>
                     <span>{el.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button onClick={() => {
               props.taskFilter('All')
            }}>All
            </button>
            <button onClick={() => {
               props.taskFilter('Active')
            }}>Active
            </button>
            <button onClick={() => {
               props.taskFilter('Completed')
            }}>Completed
            </button>
         </div>
      </div>
   );
}