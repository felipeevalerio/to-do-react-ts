import styles from './Task.module.scss';
import trashImg from '../../assets/Trash.svg';
import checkedImg from '../../assets/check.svg';
import uncheckedImg from '../../assets/unchecked.svg';
import { useState } from "react";

export interface ITask {
    content: string;
    completed?: boolean;
}

interface TaskProps extends ITask {
    onDeleteTask: (content: string) => void;
}

export function Task ({content, onDeleteTask}: TaskProps) {
    const [completed, setCompleted] = useState(false);
    
    function handleDeleteTask() {
        onDeleteTask(content);
    };

    function handleChangeStatusTask () {
        setCompleted(!completed);
    };

    return (
        <li className={`${completed ? styles.completed : styles.notCompleted} ${styles.task}`} >
            <button 
                onClick={handleChangeStatusTask}
                title={completed ? 'Undo Task' : 'Complete Task'}  
                className={styles.completeButton} 
            >
                <img src={completed ? checkedImg : uncheckedImg} alt={completed ? 'Task completed' : 'Uncompleted task'} />
            </button>
            <p>{content}</p>
            <button title="Delete Task" onClick={handleDeleteTask} >
                <img 
                    src={trashImg} 
                    alt="Delete Task" 
                />
            </button>
        </li>
    );
};