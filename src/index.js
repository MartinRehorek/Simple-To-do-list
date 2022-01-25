import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddTaskForm(props) {
  const [task, setTask] = useState('');

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    if (task !== '') {
      props.handleSubmit(task);
      setTask('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Add a new task"
        onChange={handleChange}
        value={task} />
      <button class="myButton" type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [tasks, setContacts] = useState(props.data);

  function addTask(taskName) {
    setContacts([...tasks, taskName]);
  }

  return (
    <div>
      <AddTaskForm handleSubmit={addTask} />
      <PeopleList data={tasks} />
    </div>
  );
}
let tasks = [];

ReactDOM.render(<ContactManager data={tasks} />, document.getElementById('toDoList'));