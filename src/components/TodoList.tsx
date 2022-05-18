import React from 'react';

type TasksPropsType={
   id:number
   title: string
   isDone: boolean
}

type TodolistPropsType={
   title:string
   tasks:Array<TasksPropsType>
   removeTask:(removeId:number)=>void
}

export const Todolist = (props:TodolistPropsType) => {
   return (
         <div>
            <h3>{props.title}</h3>
            <div>
               <input /><button>+</button>
            </div>
            <ul>
               {props.tasks.map((el)=>{
                  return(
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