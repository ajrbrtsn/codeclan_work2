import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(
    [
      { name: 'Food Shopping',  priority: 'High' },
      { name: 'Clean the House', priority: 'Medium'},
      { name: 'Walk the Dog', priority: 'High'},
      { name: 'Lift Weights', priority: 'Low'}
    ]
  )
  const [newTask, setNewTask] = useState("")

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index}>
        <span> {task.name} </span>
      </li>
    )
  })
  
  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleRadioButton = (event) => {
    console.log(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, isComplete: false})
    setTasks(copyTasks)
    setNewTask("")
  }
  
  return (
    <div className="App">

      <h1>To-do List</h1>
  
      <ul> 
        {taskNodes}
      </ul>


        

      <form onSubmit={saveNewTask}>
      <input type='radio' id='food shopping' name='priority' value= "High" onChange={handleRadioButton}/>
        <label for='food shopping'>High</label><br></br>
        <input type='radio' id='clean the house' name='priority' value= "Low" onChange={handleRadioButton}/>
        <label for='clean the house'>Low</label><br></br>
        <label htmlFor= 'new-task'> Add a new task</label>
        <input id='new-task' type='text' onChange={handleTaskInput}/>
        <input type='submit' value='Save New Task' />
      </form>

    </div>
  )
}

export default App;
