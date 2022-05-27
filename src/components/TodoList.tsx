import React, {useState} from 'react';
import {FilterValueType} from "../App";
import {Button} from "./Button";
import {Input} from "./Input";
import {CheckBox} from "./CheckBox";

import s from '../modules/Todolist.module.css';


type TasksPropsType = {
   id: string
   title: string
   isDone: boolean
}

type TodolistPropsType = {
   todolistId: string
   title: string
   tasks: Array<TasksPropsType>
   removeTask: (removeId: string) => void
   changeFilter: (todolistId:string, filterValue: FilterValueType) => void
   addTask: (newTitle: string) => void
   changeStatusCheckbox: (currentId: string, eventStatus: boolean) => void
   filter: FilterValueType
}

export const Todolist = (props: TodolistPropsType) => {

   let [title, setTitle] = useState('')
   let [error, setError] = useState<string | null>(null)

   const addTaskHandler = () => {
      if (title.trim() !== '') {
         props.addTask(title.trim())
         setTitle('')
      } else {
         setError('Title is required')
      }
   }

   const changeFilterHandler = (todolistId:string, filterValue: FilterValueType) => {
      props.changeFilter(todolistId, filterValue)
   }

   const removeTaskHandler = (tID: string) => {
      props.removeTask(tID)
   }

   const chackboxHandler = (currentId: string, currentEvent: boolean) => {
      props.changeStatusCheckbox(currentId, currentEvent)
   }

   return (
      <div>
         <h3>{props.title}</h3>
         <div className={s.fullInput}>
            <Input
               title={title}
               setTitle={setTitle}
               callBack={addTaskHandler}
               error={error}
               setError={setError}
            />
            <Button name={'+'} callBack={addTaskHandler}/>
         </div>
         <ul>
            {
               props.tasks.map(el => <li key={el.id} className={el.isDone ? s.isDone : ''}>
                  <Button name={'x'} callBack={() => removeTaskHandler(el.id)}/>
                  <CheckBox
                     elIsDone={el.isDone}
                     callBack={(currentEvent) => chackboxHandler(el.id, currentEvent)}
                  />
                  <span>{el.title}</span>
               </li>)
            }
         </ul>
         <div>
            <Button name={'All'} callBack={() => changeFilterHandler(props.todolistId,'All')}/>
            <Button name={'Active'} callBack={() => changeFilterHandler(props.todolistId,'Active')}/>
            <Button name={'Completed'} callBack={() => changeFilterHandler(props.todolistId,'Completed')}/>
         </div>
      </div>
   );
};