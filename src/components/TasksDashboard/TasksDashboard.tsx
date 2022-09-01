import styles from './TasksDashboard.module.scss';
import { EmptyTask } from '../EmptyTask/EmptyTask';
import { ITask, Task } from '../Task/Task';

interface TasksDashboardProps {
    tasks: ITask[];
    setTasks: (tasks: ITask[]) => void;
}


export function TasksDashboard ({ tasks, setTasks }: TasksDashboardProps) {
    function deleteTask(content: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.content !== content);
        setTasks(tasksWithoutDeletedOne);
    }
    return (
        <div className={styles.tasksDashboard}>
            <header className={styles.info}>
                <strong className={styles.numberOfCreatedTasks}>Tarefas Criadas <span>0</span></strong>
                <strong className={styles.numberOfCompletedTasks}>Tarefas Concluídas <span>0</span></strong>
            </header>

            <ul className={styles.tasksContainer}>
                {tasks.length > 0 ? tasks.map(task => {
                    return <Task 
                        key={task.content}
                        content={task.content}
                        onDeleteTask={deleteTask}
                    />
                }) : <EmptyTask />
                }
            </ul>
        </div>
    );
};