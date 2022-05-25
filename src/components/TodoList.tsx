import React, {ChangeEvent, useState} from 'react';
import {FilterValueType} from "../App";
import {Button} from "./Button";
import {Input} from "./Input";

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
   changeStatusCheckbox:(currentId:string, eventStatud:boolean)=>void
}

export const Todolist = (props: TodolistPropsType) => {

   const [title, setTitle] = useState('')

   const addTaskHandler = () => {
      props.addTask(title)
      setTitle('')
   }

   const changeFilterHandler = (filterValue: FilterValueType) => {
      props.changeFilter(filterValue)
   }

   const removeTaskHandler = (tID: string) => {
      props.removeTask(tID)
   }

   const chackboxHandler = (currentId:string, currentEvent:boolean) => {
      props.changeStatusCheckbox(currentId, currentEvent)
   }

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <Input title={title} setTitle={setTitle} callBack={addTaskHandler}/>
            <Button name={'+'} callBack={addTaskHandler}/>
         </div>
         <ul>
            {
               props.tasks.map(el => <li key={el.id}>
                  <Button name={'x'} callBack={() => removeTaskHandler(el.id)}/>
                  <input type="checkbox" checked={el.isDone} onChange={(event)=>chackboxHandler(el.id, event.currentTarget.checked)}/>
                  <span>{el.title}</span>
               </li>)
            }
         </ul>
         <div>
            <Button name={'All'} callBack={() => changeFilterHandler('All')}/>
            <Button name={'Active'} callBack={() => changeFilterHandler('Active')}/>
            <Button name={'Completed'} callBack={() => changeFilterHandler('Completed')}/>
         </div>
      </div>
   );
};