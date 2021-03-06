import request from 'superagent'


export const receiveTasks = (tasks) => {
  return {
    type: 'RECEIVE_TASKS',
    tasks
  }
}
export const getTasks = () => {
  return (dispatch) => {
    request
      .get('/api/tasks')
      .end((err, res) => {
        if (!err) dispatch(receiveTasks(res.body))
      })
  }
}

export const updateStatus = (task, increment) => {
  let newTask = {...task, completionStatus: task.completionStatus + increment}
  return (dispatch) => {
    request
      .put(`/api/tasks/${task,task.id}`)
      .send(newTask)
      .end((err, res) => {
        if (!err) dispatch(getProjectInfo(task.project_id))
      })
  }
}

export const addTask = (newTask) => {
  return (dispatch) => {
    request
      .post('/api/tasks/')
      .send(newTask)
      .end((err, res) => {
        if (!err) dispatch(getTasks())
      })
  }
}

export const removeTask = (taskId) => {
  return {
    type: 'REMOVE_TASK',
    taskId
  }
}

export const delTask = (task) => {
  return (dispatch) => {
    request
    .del(`/api/task/${task.id}`)
    .end((err, res) => {
      if (!err) dispatch(removeTask(task.id))
    })
  }
}

export const receiveProjects = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS',
    projects
  }
}
export const getProjects = () => {
  return (dispatch) => {
    request
      .get('/api/projects')
      .end((err, res) => {
        if (!err) dispatch(receiveProjects(res.body))
      })
  }
}


export const receiveProjectsTasks = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS_TASKS',
    projects
  }
}

export const getProjectsTasks = (project_id) => {
  return (dispatch) => {
    request
      .get(`/api/projects/${project_id}/tasks`)
      .end((err, res) => {
        if (!err) dispatch(receiveProjects(res.body))
      })
  }
}


export const receiveProjectInfo = (projectInfo) => {
  return {
    type: 'RECEIVE_PROJECT_INFO',
    projectInfo
  }
}
export const getProjectInfo = (project_id) => {
  return (dispatch) => {
    request
      .get(`/api/projects/${project_id}`)
      .end((err, res) => {
        res.body.project_id = project_id
        if (!err) dispatch(receiveProjectInfo(res.body))
      })
  }
}
