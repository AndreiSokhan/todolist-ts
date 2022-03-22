import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

function App() {

   const [tasks1, setTasks1] = useState([
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: true},
      {id: 3, title: "ReactJS", isDone: false}
   ])


   const removeTask = (newId: number) => {
      //удаляем строку id  которой мы получили
      setTasks1(tasks1.filter(el => el.id !== newId))
   }

   return (
      <div className="App">
         <TodoList
            title={"What to learn"}
            task={tasks1}
            removeTask={removeTask}
         />
      </div>
   );
}

export default App;
