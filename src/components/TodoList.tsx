import React, {useState} from 'react';
import {FilterValueType} from "../App";
import {Button} from "./Button";
import {Input} from "./Input";
import {CheckBox} from "./CheckBox";

import style from '../modules/Todolist.module.css';


type TasksPropsType = {
   id: string
   title: string
   isDone: boolean
}

type TodolistPropsType = {
   title: string
   tasks: Array<TasksPropsType>
   removeTask: (removeId: string) => void
   changeFilter: (filterValue: FilterValueType) => void
   addTask: (newTitle: string) => void
   changeStatusCheckbox: (currentId: string, eventStatus: boolean) => void
   // filter:FilterValueType
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

   const changeFilterHandler = (filterValue: FilterValueType) => {
      props.changeFilter(filterValue)
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
         <div>
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
               props.tasks.map(el => <li key={el.id} className={el.isDone ? style.isDone : ''}>
                  <Button name={'x'} callBack={() => removeTaskHandler(el.id)}/>
                  {/*<input*/}
                  {/*   type="checkbox"*/}
                  {/*   checked={el.isDone}*/}
                  {/*   onChange={(event) => chackboxHandler(el.id, event.currentTarget.checked)}/>*/}
                  <CheckBox
                     elIsDone={el.isDone}
                     elID={el.id}
                     callBack={chackboxHandler}
                  />
                  <span>{el.title}</span>
               </li>)
            }
         </ul>
         <div>
            <Button /* className={props.filter==='All' ? style.activeFilter : ''}*/ name={'All'} callBack={() => changeFilterHandler('All')}/>
            <Button name={'Active'} callBack={() => changeFilterHandler('Active')}/>
            <Button name={'Completed'} callBack={() => changeFilterHandler('Completed')}/>
         </div>
      </div>
   );
};