import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {NewTaskForm, Tasks} from "../components/Task";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    async function fetchTasks() {
        const taskData = await axios.get('/api/todos');

        setTasks(taskData.data || []);
    }

    useEffect(async () => {
        await fetchTasks();
    }, []);

    const handleTaskAdd = async (task) => {
        await axios.post('/api/todos', task);

        await fetchTasks();
    };

    return (
        <div className={styles.container}>
            <NewTaskForm handleTaskAdd={handleTaskAdd} />

            <Tasks tasks={tasks} />
        </div>
    );
}
