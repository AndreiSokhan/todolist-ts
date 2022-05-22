import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "../App";
import {Button} from "./Button";

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
}

export const Todolist = (props: TodolistPropsType) => {
   const [title, setTitle] = useState('')

   const addTaskHandler = () => {
      props.addTask(title)
      setTitle('')
   }

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value)
   }

   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         addTaskHandler()
      }
   }

   const changeFilterHandler = (filterValue: FilterValueType) => {
      props.changeFilter(filterValue)
   }

   const removeTaskHandler = (tID: string) => {
      props.removeTask(tID)
   }

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <Button name={'+'} callBack={addTaskHandler}/>
         </div>
         <ul>
            {
               props.tasks.map(el => <li key={el.id}>
                  <Button name={'x'} callBack={() => removeTaskHandler(el.id)}/>

                  <input type="checkbox" checked={el.isDone}/>
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