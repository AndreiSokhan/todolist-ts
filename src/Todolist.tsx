import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {filterType} from "./App";
import {Button} from "./Components/Button";

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
   const removeTaskHandler =(elID:string)=>{
      props.removeTask(elID)
   }
   const onClickHandler =(nameButton:filterType)=>{
      props.taskFilter(nameButton)
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
            <Button title={'+'} callBack={addTaskHandler}/>
         </div>
         <ul>
            {props.tasks.map((el) => {

               return (
                  <li key={el.id}>
                     {/*<button onClick={()=>removeTaskHandler(el.id)}>x</button>*/}
                     <Button title={'x'} callBack={()=>removeTaskHandler(el.id)}/>
                     <input type="checkbox" checked={el.isDone}/>
                     <span>{el.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <Button title={'All'} callBack={()=>onClickHandler('All' )}/>
            <Button title={'Active'} callBack={()=>onClickHandler('Active' )}/>
            <Button title={'Completed'} callBack={()=>onClickHandler('Completed' )}/>
         </div>
      </div>
   );
}