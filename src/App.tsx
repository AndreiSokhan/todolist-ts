import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

const App = () => {

   let [tasks, setTasks] = useState([
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: true},
      {id: 3, title: "React&JS", isDone: false},
      {id: 4, title: "RestAPI", isDone: false},
      {id: 5, title: "GraphQL", isDone: false}
   ])

   const [FilterValuesType, setfilterValuesType]=useState("All")

   const removeTask = (removeId: number) => {
      setTasks(tasks.filter((el) => el.id !== removeId))
   }

   const changeFilter = (filterValue: string) => {
      setfilterValuesType(filterValue)
   }

   let filter=tasks;
   if (FilterValuesType ==='Active') {
      filter = tasks.filter((el) => !el.isDone)
   }
   if (FilterValuesType ==='Completed') {
      filter = tasks.filter((el) => el.isDone)
   }

   // let colander = tasks.filter((el) => !el.isDone)

   return (
      <div className="App">
         <Todolist
            title={"What to learn"}
            tasks={filter}
            removeTask={removeTask}
            changeFilter={changeFilter}
         />
      </div>
   );
};

export default App;