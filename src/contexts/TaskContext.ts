import { createContext, Dispatch } from "react";
import { Task } from "../pages/TasksPage";

type TaskContextType = {
    tasks: Task[]
}

type TasksDispatchContextType = Dispatch<any>;

export const TaskContext= createContext<TaskContextType | undefined>(undefined);
export const TasksDispatchContext = createContext<TasksDispatchContextType | undefined>(undefined);