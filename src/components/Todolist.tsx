import React, {ChangeEvent} from 'react';
import {FullInput} from "./FullInput";
import s from "../modules/Todolist.module.css";
import {FilterValueType} from "../App";

export type TaskPropsType = {
   id: string
   title: string
   isDone: boolean
}

type TodolistPropsType = {
   todolistID: string
   title: string
   task: Array<TaskPropsType>
   removeTask: (todolistID: string, taskId: string) => void
   removeTodolist: (todolistID: string) => void
   changeFilter: (todolistID: string, value: FilterValueType) => void
   addTask: (todolistID: string, title: string) => void
   changeStatusCheckbox: (currentId: string, eventStatus: boolean) => void
   filter: FilterValueType
}

export const Todolist = (props: TodolistPropsType) => {

   const changeFilterHandler = (todolistID: string, value: FilterValueType) => {
      props.changeFilter(props.todolistID, value)
   }
   const removeTaskHandler = (todolistID: string, tID: string) => {
      props.removeTask(props.todolistID, tID)
   }
   const removeTodolistHandler = () => {
      props.removeTodolist(props.todolistID)
   }
   const addTaskHandler = (title: string) => {
      props.addTask(props.todolistID, title)
   }

   return (
      <div>
         <h3>
            {props.title}
            <button onClick={removeTodolistHandler}>x</button>
         </h3>
         <div>
            <FullInput callBack={addTaskHandler}/>
         </div>
         <ul>
            {/*   t -> это один элемент массива т.е. одна таска*/}
            {props.task.map((t, index) => {

               const checkBoxHandler = (event: ChangeEvent<HTMLInputElement>) => {
                  props.changeStatusCheckbox(t.id, event.currentTarget.checked)
               }

               return (
                  <li key={t.id} className={t.isDone ? s.isDone : ""}>
                     <button onClick={() => removeTaskHandler(props.todolistID, t.id)}>x</button>
                     <input type="checkbox" checked={t.isDone}
                            onChange={checkBoxHandler}/>
                     <span>{t.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button className={props.filter === 'All' ? s.activeFilter : ''}
                    onClick={() => changeFilterHandler(props.todolistID, 'All')}>All
            </button>
            <button className={props.filter === 'Active' ? s.activeFilter : ''}
                    onClick={() => changeFilterHandler(props.todolistID, 'Active')}>Active
            </button>
            <button className={props.filter === 'Completed' ? s.activeFilter : ''}
                    onClick={() => changeFilterHandler(props.todolistID, 'Completed')}>Completed
            </button>
         </div>
      </div>
   );
};
