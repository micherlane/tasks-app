import { ReactNode, useReducer, useContext } from "react";
import { TaskContext, TasksDispatchContext } from "../contexts/TaskContext";
import { TaskReducer } from "../reducers/task_reducer";

interface TaskProviderProps {
    children: ReactNode;
}

export function TasksProvider({ children} : TaskProviderProps){
    const [{ tasks }, dispatch] = useReducer(TaskReducer, { tasks: [] });
    
    return (
        <TaskContext.Provider value={{tasks}}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TaskContext.Provider>
    )
}

export function useTasks(){
    return useContext(TaskContext)?.tasks;
}

export function useTasksDispatch(){
    return useContext(TasksDispatchContext);
}