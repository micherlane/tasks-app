import { useRoutes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { TasksPage } from "../pages/TasksPage";
import { TaskDetail } from "../pages/TasksPage/components/TaskDetail";
import { TaskAdd } from "../pages/TasksPage/components/TaskAdd";
import { LoginPage } from "../pages/LoginPage";
import { AboutPage } from "../pages/AboutPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export function Routes() {
    const element = useRoutes([
        { path: "/", element: <HomePage/>},
        { path:'/login', element: <LoginPage/>},
        { path:'/about', element: <AboutPage/>},
        { path: "/tasks",
            element: <TasksPage/>,
            children: [
                { path: ':id', element: <TaskDetail /> },
                {path: 'add', element: <TaskAdd/>}
            ]
        },
        { path: '*', element: <NotFoundPage/>},
    ]);

    return element;
}