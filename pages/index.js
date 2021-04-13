import Loader from "react-loader-spinner";
import styles from '../styles/Home.module.css';
import {NewTaskForm, Tasks} from "../components/Task";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchTasks() {
        setIsLoading(true);

        const taskData = await axios.get('/api/todos');

        setTasks(taskData.data || []);

        setIsLoading(false);
    }

    useEffect(async () => {
        await fetchTasks();
    }, []);

    const handleTaskAdd = async (task) => {
        await axios.post('/api/todos', task);

        await fetchTasks();
    };

    if (isLoading) {
        return (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        );
    }

    return (
        <div className={styles.container}>
            <NewTaskForm handleTaskAdd={handleTaskAdd} />

            <Tasks tasks={tasks} />
        </div>
    );
}
