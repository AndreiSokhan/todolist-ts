import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {Button} from "./Button";

type TodoListPropsType = {
    title: string
    task: Array<TasksPropsType>
    removeTask: (id: string) => void
    tasksFilter: (filterValue: string) => void
    addTask: (newTitle: string) => void
}

type TasksPropsType = {
    id: string,
    title: string,
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
    let [newTitle, setNewTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // if (event.charCode === 13) {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const filterHandler = (filterHandler: string) => {
        props.tasksFilter(filterHandler)
    }

    const removeTaskHandler = (elID: string) => {
        props.removeTask(elID)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={newTitle}
                           onKeyPress={onKeyPressHandler}
                           onChange={onChangeHandler}/>
                    <button onClick={addTaskHandler}>+</button>
                </div>
                <ul>
                    {props.task.map((el) => {

                        return (
                            <li key={el.id}>
                                <button onClick={()=> removeTaskHandler(el.id)}>x</button>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <Button name={'All'} callBack={() => filterHandler('all')}/>
                    <Button name={'Active'} callBack={() => filterHandler('active')}/>
                    <Button name={'Completed'} callBack={() => filterHandler('completed')}/>

                    <button onClick={() => filterHandler('All')}>All</button>
                    <button onClick={() => filterHandler('Active')}>Active</button>
                    <button onClick={() => filterHandler('Completed')}>Completed</button>
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


