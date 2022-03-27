import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {Button} from "./Button";
import {Input} from "./Input";

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

   //
   // const addTaskHandler = () => {
   //    props.addTask(newTitle)
   //    setNewtitle('')
   // }
   //
   // const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
   //    if (event.key === 'Enter') {
   //       return addTaskHandler()
   //    }
   // }
   //
   // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
   //    setNewtitle(event.currentTarget.value)
   // }

   const FilterHandler = (filterValue: string) => {
      props.tasksFilter(filterValue)
   }
   const removeTaskHandler = (elID: string) => {
      props.removeTask(elID)
   }
   const addTaskHandler = () => {
      props.addTask(newTitle)
      setNewtitle('')
   }

   return (
      <div>
         <Input newTitle={newTitle} setNewtitle={setNewtitle} callBack={addTaskHandler}/>
         <Button name={'+'} callBack={addTaskHandler}/>
         {/*<FullInput callBack={props.addTask}/>*/}
         <div>
            {/*<input value={newTitle}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*/>*/}
            {/*/!*onClick не может в себе содержать функцию. При наличии функции мы всегда ее выносим вверх и в onClick оставляем только ссылку на нее*!/*/}
            {/*<button onClick={addTaskHandler}>+</button>*/}
            {/*<Button name={'+'} callBack={addTaskHandler}/>*/}
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