import React, { useState } from "react";

function Form(props) {
    const [task, setTask] = useState("")

    const handleChange = event => {
        const { task, value } = event.target;
        setTask(value)
    }

    const submitForm = () => {
        props.handleSubmit(task)
        setTask("")
    }

    return (
        <form>
            <input placeholder="Name the task" type="text" name="task" id="task" value={task} onChange={handleChange} />
            <input className="myButton" type="button" value="Submit" onClick={submitForm} />
        </form>
    );
}

export default Form