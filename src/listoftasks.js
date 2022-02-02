import React from 'react'

let TaskBody = (props) => {
    let taskRows = props.taskData.map((rowElements, index) => {
        return (
            <tr key={index}>
                <td>{rowElements}</td>
                <td>
                    <button className="myButton" onClick={() => props.removeTask(index)}>Done</button>
                </td>
            </tr>
        )
    })
    return <tbody>{taskRows}</tbody>
}

let ListOfTasks = (props) => {
    const { removeTask, taskData } = props

    return (
        <table>
            <TaskBody taskData={taskData} removeTask={removeTask} />
        </table>
    )
}

export default ListOfTasks