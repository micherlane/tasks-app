import { Task } from "../.."
import { useTasks } from "../../../../providers/TaskProvider"
import { TaskListItem } from "../TaskListItem"

interface TaskListProps {
  onRemove: (task: Task) => void
  onSave: (task: Task) => void
}

const TaskList = ({ onRemove, onSave }: TaskListProps) => {

  const tasks = useTasks();

  return (
    <>
      <h3>{tasks!.length} Tarefas cadastradas</h3>
      <ul>
        {tasks!.map(task => <TaskListItem onRemove={onRemove} onSave={onSave} key={task.id} task={task} />)}
      </ul>
    </>
  )
}

export { TaskList }
