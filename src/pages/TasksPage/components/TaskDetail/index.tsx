import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Task } from '../..';

export function TaskDetail(){
    const {id} = useParams();
    const [task, setTask] = useState<Task>();

    useEffect(()=> {
        const getDetailTask = async () => {
            const response = await fetch(`http://localhost:3000/tasks/${id}`);
            const data = await response.json();
            setTask(data as Task);
            
        }
        getDetailTask();
       
    }, [])
    return (
        
        <main>
            <h2>Bem-vindo(a) a DetailTaskPage!</h2>
            <p>Nome: {task?.description} </p>
        </main>
    )
}