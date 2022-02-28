import React from "react";

type TodoListPropsType={
    title:string
    task:Array<TasksPropsType>
}

type TasksPropsType={
    id:number,
    title:string,
    isDone:boolean
}

export const TodoList=(props:TodoListPropsType)=>{
        return (
            <div className="App">
                <div>
                    <h3>{props.title}</h3>
                    <div>
                        <input/>
                        <button>+</button>
                    </div>
                    <ul>
                        {props.task.map((el:TasksPropsType) => {
                            debugger
                            return(
                                <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                            )
                            })}
                        {/*<li><input type="checkbox" checked={props.task[0].isDone}/> <span>{props.task[0].title}</span></li>*/}
                        {/*<li><input type="checkbox" checked={props.task[1].isDone}/> <span>{props.task[1].title}</span></li>*/}
                        {/*<li><input type="checkbox" checked={props.task[2].isDone}/> <span>{props.task[2].title}</span></li>*/}
                    </ul>
                    <div>
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                </div>
            </div>
        );
}

// Array.map((el)=>{
//     return(
//         el
//     )
// })

