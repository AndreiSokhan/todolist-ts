import React from 'react';

type PropsType = {
   title: string
   tasks: TasksType[] //[] такая запись вместо Array <TasksType>
}
type TasksType = {
   id: number
   title: string
   isDone: boolean
}
export const Todolist = (props: PropsType) => {

   const taskMap=props.tasks.map((el) => {
         return (
            <li>
               <input type="checkbox" checked={el.isDone}/>
               <span>{el.title}</span>
            </li>
         )
      })

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input/>
            <button>+</button>
         </div>
         <ul>
            {taskMap}
            {/*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
            {/*<li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
            {/*<li><input type="checkbox" checked={false}/> <span>React</span></li>*/}

         </ul>
         <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
         </div>
      </div>
   );
};