import { useState } from "react";
import { Header } from "./components/Header/Header";
import { TaskCreator } from "./components/TaskCreator/TaskCreator";
import styles from './App.module.scss';
import { TasksDashboard } from "./components/TasksDashboard/TasksDashboard";

export function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    
    function createTask(newTask: string) {
        setTasks((state) => [...state, newTask]);
    };

    return (
        <div className={styles.app}>
            <Header/>

            <main className={styles.wrapper}>
                <TaskCreator createTask={createTask} />
                <TasksDashboard tasks={tasks}/>
            </main>
        </div>
    )
}