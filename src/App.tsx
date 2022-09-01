import { useState } from "react";
import { Header } from "./components/Header/Header";
import { TaskCreator } from "./components/TaskCreator/TaskCreator";
import styles from './App.module.scss';
import { TasksDashboard } from "./components/TasksDashboard/TasksDashboard";
import { ITask } from "./components/Task/Task";

export function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    
    function createTask(newTask: string) {
        setTasks((state) => [...state, {
            content: newTask,
            completed: false
        }]);
    };

    return (
        <div className={styles.app}>
            <Header/>

            <main className={styles.wrapper}>
                <TaskCreator createTask={createTask} />
                <TasksDashboard tasks={tasks} setTasks={setTasks}/>
            </main>
        </div>
    )
}