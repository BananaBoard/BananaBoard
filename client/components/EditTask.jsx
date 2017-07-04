import React from 'react'
import {connect} from 'react-redux'
import {editTaskAction} from '../actions/editTask'

class EditTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: props.task,
      toggleEdit: props.toggleEdit
    }
  }
  updateTaskDetails(e) {
    let task = this.state.task
    task[e.target.name] = e.target.value
    this.setState({task})
  }
  submitEdit(e) {
    e.preventDefault()
    dispatch(editTaskAction(this.state.task))
    this.state.toggleEdit()
  }
  render() {
    const {task, toggleEdit} = this.state
    console.log({task});
    return (
      <form className="single-task" onSubmit={(e) => this.submitEdit(e)}>
        <input value={task.taskName} placeholder="Task Name" name="taskName" onChange={(e) => this.inputTaskDetails(e)}></input>
        <input value={task.description} placeholder="Description" name="description" onChange={(e) => this.inputTaskDetails(e)}></input>
        <input value={task.complexity} placeholder="Complexity" name="complexity" onChange={(e) => this.inputTaskDetails(e)}></input>
        <input value={task.userName} placeholder="User Name" name="userName" onChange={(e) => this.inputTaskDetails(e)}></input>
        <input type="submit" value="Update Task"/>
        <input type="button" onClick={() => toggleEdit()} value="cancel"/>
      </form>
    )
  }
}


export default connect()(EditTask)
