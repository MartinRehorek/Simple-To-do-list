import React, { Component } from "react";

class Form extends Component {
    initialState = {
        task : ""
    }

    state = this.initialState;

    handleChange = (event) => {
        let { task, value} = event.target;
        console.log(value)
        this.setState({
            task : value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {task}  = this.state;

        return (
            <form>
                <input placeholder="Name the task" type="text" name="task" id="task" value={task} onChange={this.handleChange} />
                <input className="myButton" type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;