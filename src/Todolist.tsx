import React from 'react';

type PropsType = {
   title: string
   tasks: Array<TasksType> //возможна еще и такая запись TasksType[]
   removeTask:(id:number)=>void
}
type TasksType = {
   id: number
   title: string
   isDone: boolean
}
export const Todolist = (props: PropsType) => {

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input/>
            <button>+</button>
         </div>
         <ul>
            {props.tasks.map((el) => {
               return (
                  <li key={el.id}>
                     <button onClick={()=>props.removeTask(el.id)}>x</button>
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
   );
};