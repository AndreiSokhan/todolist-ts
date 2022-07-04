import React from 'react';

type TaskPropsType = {
   id: number
   title: string
   isDone: boolean
}

type TodolistPropsType = {
   title: string
   task: Array<TaskPropsType>
   removeTask: (taskId:number)=>void
}


export const Todolist = (props: TodolistPropsType) => {
   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input/>
            <button>+</button>
         </div>
         <ul>
            {/*   t -> это один элемент массива т.е. одна таска*/}
            {props.task.map((t, index) => {
               return (
                  <li key={index}>
                     <button onClick={()=>props.removeTask(t.id)}>x</button>
                     <input type="checkbox" checked={t.isDone}/>
                     <span>{t.title}</span>
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
