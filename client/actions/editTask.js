import request from 'superagent'

export const editTask = (task) => {
  return {
    type: 'EDIT_TASK',
    task
  }
}

export const editTaskAction = (task) => {
  return (dispatch) => {
    request
      .put('/api/tasks')
      .send({task})
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
      })
  }
}
