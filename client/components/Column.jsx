import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import ColumnHeader from './ColumnHeader'
import {updateStatus} from '../actions'
import Task from './Task'
import AddTask from './addTask'

class Column extends React.Component {
  constructor(props) {
    super(props)
    console.log({props});
    const {columns, tasks, selectedTask, column} = props
    this.state = {
      showAddTask: false,
      tasks,
      columns,
      column,
      selectedTask,
      name
    }
  }
  componentWillReceiveProps({tasks, columns, selectedTask, column}) {
    this.setState({tasks, columns, selectedTask, column})
  }
  matchColumn(col, tasks) {
    return tasks.filter((task) => task.completionStatus == col)
  }
  toggleAddTask() {
    let showAddTask = !this.state.showAddTask
    this.setState({showAddTask})
  }
  render() {
    const {showAddTask, tasks, columns, selectedTask, column, name} = this.state
    return (
      <div className="tasklist three columns">
        <ColumnHeader name={name} column={column}/>
        <ul>
          {this.matchColumn(column.column_value, tasks).map((task, i) =>
            <Task task={task} key={i} selected={task.id == selectedTask}/>
          )}
          {showAddTask
            ? <AddTask colummn={column.column_value} toggleAddTask={() => this.toggleAddTask()}/>
            : <button onClick={() => this.toggleAddTask()} className="addTaskButton">Add Task</button>

          }
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {tasks: state.tasks,
    columns: state.columns,
    selectedTask: state.selectedTask
  }
}

export default connect(mapStateToProps)(Column)
