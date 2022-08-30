import { useState } from "react";
import { Header } from "./components/Header/Header";
import { TaskCreator } from "./components/TaskCreator/TaskCreator";
import styles from './App.module.scss';

export function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    
    function createTask(newTask: string) {
        setTasks((state) => [...state, newTask]);
    };

    return (
        <div className={styles.app}>
            <Header/>

            <div className={styles.wrapper}>
                <TaskCreator createTask={createTask} />
                <main></main>
            </div>
        </div>
    )
}