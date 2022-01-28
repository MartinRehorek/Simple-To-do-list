import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import ListOfTasks from './listoftasks';
import Form from './form';

class App extends Component {
  state = {
    tasks: []
  }

  removeTask = (index) => {
    let { tasks } = this.state;

    this.setState({
      tasks: tasks.filter((task, indexOfTask) => {
        console.log("task: " + task.task + " has been deleted")
        return index !== indexOfTask
      }),
    })
  }

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  render() {
    let { tasks } = this.state

    return (
      <div>
        <Form handleSubmit={this.handleSubmit} />
        <ListOfTasks taskData={tasks} removeTask={this.removeTask} />
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('toDoList'));
