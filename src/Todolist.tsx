import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {filterType} from "./App";

type TodolistPropsType = {
   title: string
   tasks: Array<TaskPropsType>
   removeTask: (id: string) => void
   taskFilter: (filterValue: filterType) => void
   addTask: (title: string) => void
}

type TaskPropsType = {
   id: string
   title: string
   isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

   let [title, setTitle] = useState('')

   const addTaskHandler = () => {
      props.addTask(title)
      setTitle('')
   }
   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value)
   }
   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') addTaskHandler()
   }

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input
               value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTaskHandler}>+</button>
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