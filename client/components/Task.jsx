import React from 'react'
import {connect} from 'react-redux'
import {selectTaskAction} from '../actions/selectTask'
import {updateStatus} from '../actions'
import EditTask from './EditTask'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: props.task,
      selected: props.selected,
      showEdit: false,
      dispatch: props.dispatch
    }
  }
  componentWillReceiveProps ({task, selected}) {
    this.setState({task, selected})
  }
  toggleEdit() {
    this.setState({showEdit: !this.state.showEdit})
  }
  renderEdit() {
    return (
      <EditTask task={this.state.task} toggleEdit={() => this.toggleEdit()}/>
    )
  }
  renderNonEdit() {
    const {task, selected, dispatch} = this.state
    return (
      <div className='single-task' onClick={(e) => dispatch(selectTaskAction(task))}>
        <li>
          <h5>
            <span className="taskName" onClick={() => this.toggleEdit()}>{task.taskName}</span>
            <span className="userName">{task.userName}</span>
          </h5>
        </li>
        <li>
          <span className="description">{task.description}</span>
        </li>
        {selected
          ? <li>
            <div className="flexrow">
              <div className="leftarrow" onClick={() => dispatch(updateStatus(task, -1))}>🡰</div>
              {task.complexity}<img className="complexity-img" src="banana.png" alt="banana"></img>
              <div className="rightarrow" onClick={() => dispatch(updateStatus(task, 1))}>🡲</div>
            </div>
          </li>
          : ' '
        }
      </div>
    )
  }
  render() {
    return (
        this.state.showEdit
          ? this.renderEdit()
          : this.renderNonEdit()
    )
  }
}


export default connect()(Task)
