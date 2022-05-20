import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "../App";

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

   const changeFilterHandler = (filterValue:FilterValueType) => {
      props.changeFilter(filterValue)
   }

   const x = () => {

   }

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTaskHandler}>+</button>
         </div>
         <ul>
            {props.tasks.map(el => {
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
            <button onClick={()=>changeFilterHandler('All')}>All</button>
            <button onClick={()=>changeFilterHandler('Active')}>Active</button>
            <button onClick={()=>changeFilterHandler('Completed')}>Completed</button>
         </div>
      </div>
   );
};