import React from "react";

type TasksPropsType = {
   id: number,
   title: string,
   isDone: boolean
}

type TodoListPropsType = {
   title: string,
   task: Array<TasksPropsType>,
   removeTask: (id:number)=>void
}

export const TodoList = (props: TodoListPropsType) => {
   return (
      <div>
         <h3>{props.title}</h3>

         <div>
            <input/>
            <button>+</button>
         </div>
         <ul>
            {props.task.map((el) => {
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
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
         </div>
      </div>
   )
}

//метод map
// Array.map((el)=>{
//    return (
//       el
//    )
// });