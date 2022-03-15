import React, {useState} from "react";

type TodoListPropsType = {
    title: string
    task: Array<TasksPropsType>
    removeTask: (id: string) => void
    tasksFilter: (filterValue: string) => void
    addTask: (newTitle:string) => void
}

type TasksPropsType = {
    id: string,
    title: string,
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
    let [newTitle, setNewTitle] = useState('')

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input onChange={(event) => setNewTitle(event.currentTarget.value)}/>
                    {/*<button onClick={() =>props.addTask(newTitle)}>+</button>*/}
                    <button onClick={() =>props.addTask(newTitle)}>+</button>
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
                    <button onClick={() => props.tasksFilter("All")}>All</button>
                    <button onClick={() => props.tasksFilter("Active")}>Active</button>
                    <button onClick={() => props.tasksFilter("Completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
}

// export const TodoList=()=>{
//     return (
//         <>
//
//         </>
//     )
// }


