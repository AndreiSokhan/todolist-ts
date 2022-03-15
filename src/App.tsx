import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {v1} from "uuid";


export const App = () => {

    //useState - это hook  setTasks - команда которая говорит Reactу ПЕРЕРИСОВАТЬ
    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: true},
        {id: v1(), title: "GraphQL", isDone: false}
    ])

    const removeTask = (newId: string) => {
        // удалить строчку id которой приходит
        let filtered = tasks.filter((el) => el.id !== newId)
        setTasks(filtered)
    }

    let [valueButton, setValueButton] = useState('All')

    const tasksFilter = (filterValue: string) => {
        // filterValue == valueButton
        setValueButton(filterValue)
    }

    const addTask = (newTitle:string) => {
        let newTask = {id: v1(), title: newTitle, isDone: true}
        setTasks([newTask, ...tasks])
    }

    let prokladka = tasks
    if (valueButton === "Active") {
        prokladka = tasks.filter(el => el.isDone === false)
    }
    if (valueButton === "Completed") {
        prokladka = tasks.filter(el => el.isDone === true)
    }

    return (
        <div className="App">
            <TodoList
                title={"What to learn"}
                task={prokladka}
                removeTask={removeTask}
                tasksFilter={tasksFilter}
                addTask={addTask}
            />
        </div>
    );
}

