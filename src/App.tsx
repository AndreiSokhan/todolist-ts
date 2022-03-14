import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";


export const App = ()=> {
    // const tasks = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false },
    //     { id: 4, title: "JS", isDone: true },
    //     { id: 5, title: "ReactJS", isDone: false }
    // ]


    //useState - это hook  setTasks - команда которая говорит Reactу ПЕРЕРИСОВАТЬ
    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: true},
        {id: 5, title: "GraphQL", isDone: false}
    ])

    const removeTask = (newId: number) => {
        // удалить строчку id которой приходит
        let filtered = tasks.filter((el) => el.id !==newId)
        setTasks(filtered)
    }

    let [valueButton, setValueButton] = useState('All')

    const tasksFilter = (filterValue: string) => {
        // filterValue == valueButton
        setValueButton(filterValue)
    }

    // let prokladka = tasks.filter(el => el.isDone === true)

    let prokladka = tasks
    if (valueButton === "Active") {
        prokladka = tasks.filter(el => el.isDone === false)
    }
    if (valueButton === "Complited") {
        prokladka = tasks.filter(el => el.isDone === true)
    }

    return (
        <div className="App">
            <TodoList
                title={"What to learn"}
                task={prokladka}
                removeTask={removeTask}
                tasksFilter={tasksFilter}
                // task={tasks}
            />
        </div>
    );
}

