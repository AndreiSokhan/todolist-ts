import React, {ChangeEvent} from 'react';
import {FullInput} from "./FullInput";
import s from "../modules/Todolist.module.css";
import {FilterValueType} from "../App";

type TaskPropsType = {
   id: string
   title: string
   isDone: boolean
}

type TodolistPropsType = {
   title: string
   task: Array<TaskPropsType>
   removeTask: (taskId: string) => void
   changeFilter: (value: FilterValueType) => void
   addTask: (title: string) => void
   changeStatusCheckbox: (currentId: string, eventStatus: boolean) => void
   filter: FilterValueType
}

export const Todolist = (props: TodolistPropsType) => {

   const changeFilterHandler = (value: FilterValueType) => {
      props.changeFilter(value)
   }

   const removeTaskHandler = (tID: string) => {
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

               const checkBoxHandler = (event: ChangeEvent<HTMLInputElement>) => {
                  props.changeStatusCheckbox(t.id, event.currentTarget.checked)
               }

               return (
                  <li key={index} className={t.isDone ? s.isDone : ""}>
                     <button onClick={() => removeTaskHandler(t.id)}>x</button>
                     <input type="checkbox" checked={t.isDone}
                            onChange={checkBoxHandler}/>
                     <span>{t.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button className={props.filter === 'All' ? s.activeFilter : ''}
                    onClick={() => changeFilterHandler('All')}>All
            </button>
            <button className={props.filter === 'Active' ? s.activeFilter : ''}
                    onClick={() => changeFilterHandler('Active')}>Active
            </button>
            <button className={props.filter === 'Completed' ? s.activeFilter : ''}
                    onClick={() => changeFilterHandler('Completed')}>Completed
            </button>
         </div>
      </div>
   );
};
