import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Task } from '../..';
import { Header } from '../../../../components/Header';

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
        <>
        <Header titulo='Detalhes Task'/>
        <main>
            <p>Nome: {task?.name} </p>
        </main>
        </>
    )
}