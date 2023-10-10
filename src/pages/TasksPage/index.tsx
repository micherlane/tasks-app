import { useEffect, useReducer } from 'react'
import { ActionType, TaskReducer } from '../../reducers/task_reducer'
import { TaskList } from './components/TaskList'
import { Link} from 'react-router-dom';

export interface Task {
  id: string
  name: string
  description?: string
  done: boolean
  created_at: Date
}


export function TasksPage() {

  const [{ tasks }, dispatch] = useReducer(TaskReducer, { tasks: [] })

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ActionType.LOADED, payload: { tasks: data } })
      })
  }, [])


  const handleRemoveTask = (task: Task) => {
    dispatch({ type: ActionType.REMOVED, payload: { id: task.id } })
  }

  const handleSaveTask = (task: Task) => {
    dispatch({ type: ActionType.UPDATED, payload: { task } })
  }

  console.log('Page renderizada!')

  return (
    <>
      
      <button><Link to="/tasks/add">Add</Link></button>
      <TaskList tasks={tasks} onSave={handleSaveTask} onRemove={handleRemoveTask} />
    </>
  )
}