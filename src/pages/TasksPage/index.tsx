import { useEffect } from 'react'
import { ulid } from 'ulidx'
import { ActionType, } from '../../reducers/task_reducer'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import {  useTasksDispatch } from '../../providers/TaskProvider'

export interface Task {
  id: string
  name: string
  description?: string
  done: boolean
  created_at: Date
}


export function TasksPage() {

  const dispatch = useTasksDispatch();

  useEffect(() => {
    fetch('https://json-server-tasks.vercel.app/tasks')
      .then(response => response.json())
      .then(data => {
        dispatch!({ type: ActionType.LOADED, payload: { tasks: data } })
      })
  }, [])


  const handleAddTask = (text: string) => {

    const task: Task = {
      id: ulid(),
      name: text,
      description: '...',
      created_at: new Date(),
      done: false
    };

    const init = {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch('https://json-server-tasks.vercel.app/tasks', init)
      .then(response => {
        if (response.ok) {
          dispatch!({ type: ActionType.ADDED, payload: { task } })
        }
      })

  }

  const handleRemoveTask = (task: Task) => {
    dispatch!({ type: ActionType.REMOVED, payload: { id: task.id } })
  }

  const handleSaveTask = (task: Task) => {
    dispatch!({ type: ActionType.UPDATED, payload: { task } })
  }

  console.log('Page renderizada!')

  return (
    <>
      <TaskForm onAdd={handleAddTask} />
      <TaskList  onSave={handleSaveTask} onRemove={handleRemoveTask} />
    </>
  )
}