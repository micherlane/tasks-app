import { createBrowserRouter } from "react-router-dom";
import { TasksPage } from "../pages/TasksPage";
import { TaskDetail } from "../pages/TasksPage/components/TaskDetail";
import { TaskAdd } from "../pages/TasksPage/components/TaskAdd";
import { LoginPage } from "../pages/LoginPage";
import { AboutPage } from "../pages/AboutPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import App from "../App";

export const router = createBrowserRouter([
    { path: "/", element: <App/> },
    { path: '/login', element: <LoginPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: "/tasks", element: <TasksPage />},
    { path: '/tasks/:id', element: <TaskDetail /> },
    { path: '/tasks/add', element: <TaskAdd /> },
    { path: '*', element: <NotFoundPage /> },
])
   
