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
   changeFilter:(filterValue:string)=>void
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
               <button onClick={()=>props.changeFilter('All')}>All</button>
               <button onClick={()=>props.changeFilter('Active')}>Active</button>
               <button onClick={()=>props.changeFilter('Completed')}>Completed</button>
            </div>
         </div>
   );
};