import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {Button} from "./Button";

type TasksPropsType = {
   id: string,
   title: string,
   isDone: boolean
}

type TodoListPropsType = {
   title: string,
   task: Array<TasksPropsType>,
   removeTask: (id: string) => void,
   tasksFilter: (filterValue: string) => void,
   addTask: (newTitle: string) => void
}

export const TodoList = (props: TodoListPropsType) => {

   let [newTitle, setNewtitle] = useState('')

   const addTaskHandler = () => {
      props.addTask(newTitle)
      setNewtitle('')
   }

   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         return addTaskHandler()
      }
   }

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setNewtitle(event.currentTarget.value)
   }

   const FilterHandler = (filterValue: string) => {
      props.tasksFilter(filterValue)
   }
   const removeTaskHandler = (elID: string) => {
      props.removeTask(elID)
   }

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input value={newTitle}
                   onKeyPress={onKeyPressHandler}
                   onChange={onChangeHandler}
            />
            {/*onClick не может в себе содержать функцию. При наличии функции мы всегда ее выносим вверх и в onClick оставляем только ссылку на нее*/}
            {/*<button onClick={addTaskHandler}>+</button>*/}
            <Button name={'+'} callBack={addTaskHandler}/>
         </div>
         <ul>
            {props.task.map((el) => {
               return (
                  <li key={el.id}>
                     {/*<button onClick={() => removeTaskHandler(el.id)}>x</button>*/}
                     <Button name={'x'} callBack={() => removeTaskHandler(el.id)}/>
                     <input type="checkbox" checked={el.isDone}/>
                     <span>{el.title}</span>
                  </li>
               )
            })}

         </ul>
         <div>
            <Button name={'All'} callBack={() => FilterHandler('All')}/>
            <Button name={'Active'} callBack={() => FilterHandler('Active')}/>
            <Button name={'Completed'} callBack={() => FilterHandler('Completed')}/>

            {/*<button onClick={() => FilterHandler('All')}>All</button>*/}
            {/*<button onClick={() => FilterHandler("Active")}>Active</button>*/}
            {/*<button onClick={() => FilterHandler("Completed")}>Completed</button>*/}
         </div>
      </div>
   )
}

//метод массива map
// Array.map((el)=>{
//    return (
//       el
//    )
// });