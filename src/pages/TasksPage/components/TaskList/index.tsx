import { Link } from "react-router-dom"
import { Task } from "../.."
import { Header } from "../../../../components/Header"
import { TaskListItem } from "../TaskListItem"

interface TaskListProps {
  tasks: Task[]
  onRemove: (task: Task) => void
  onSave: (task: Task) => void
}

const TaskList = ({ tasks, onRemove, onSave }: TaskListProps) => {


  return (
    <>
      <Header titulo="Adicionar Task"/>
      <h3>{tasks.length} Tarefas cadastradas</h3>
      <Link to="/tasks/add">Add</Link> 
      <ul>
        {tasks.map(task => <TaskListItem onRemove={onRemove} onSave={onSave} key={task.id} task={task} />)}
      </ul>
    </>
  )
}

export { TaskList }
