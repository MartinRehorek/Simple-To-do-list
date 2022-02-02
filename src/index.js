import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import ListOfTasks from './listoftasks';
import Form from './form';

function App() {
  const [tasks, setTasks] = useState([]);

  const removeTask = index => {
    setTasks(
      tasks.filter((element, indexOfElement) => {
        return index !== indexOfElement
      })
    )
  }

  const handleSubmit = addedTask => {
    setTasks([...tasks, addedTask]);
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <ListOfTasks taskData={tasks} removeTask={removeTask} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('toDoList'));
