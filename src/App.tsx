import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {v1} from "uuid";

function App() {

   let [tasks1, setTasks1] = useState([
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false}
   ])


   const removeTask = (newId: string) => {
      //удаляем строку id  которой мы получили
      setTasks1(tasks1.filter(el => el.id !== newId))
   }

   let [valueButton, setValueButton] = useState("All")

   const tasksFilter = (filterValue: string) => {
      setValueButton(filterValue)
   }

   const addTask = (newTitle: string) => {
      let newTask = {id: v1(), title: newTitle, isDone: false}
      setTasks1([newTask,...tasks1])
   }


   let prokladka = tasks1
   if (valueButton === "Active") {
      prokladka = tasks1.filter(el => el.isDone === false)
   }
   if (valueButton === "Completed") {
      prokladka = tasks1.filter(el => el.isDone === true)
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

export default App;
