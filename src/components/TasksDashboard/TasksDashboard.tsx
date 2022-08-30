import styles from './TasksDashboard.module.scss';
import { EmptyTask } from '../EmptyTask/EmptyTask';
import { Task } from '../Task/Task';

interface TasksDashboardProps {
    tasks: string[];
}

export interface Task {
    content: string;
    completed: boolean;
}


export function TasksDashboard ({ tasks }: TasksDashboardProps) {
    return (
        <div className={styles.tasksDashboard}>
            <header className={styles.info}>
                <strong className={styles.numberOfCreatedTasks}>Tarefas Criadas <span>0</span></strong>
                <strong className={styles.numberOfCompletedTasks}>Tarefas Concluídas <span>0</span></strong>
            </header>

            <ul className={styles.tasksContainer}>
                {tasks.length > 0 ? tasks.map(task => {
                    return <Task key={task}/>
                }) : <EmptyTask />
                }
            </ul>
        </div>
    );
};