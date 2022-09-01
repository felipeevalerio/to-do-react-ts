import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TaskCreator.module.scss';

interface TaskCreatorProps {
    createTask: (task: string) => void;
}

export function TaskCreator ({ createTask }: TaskCreatorProps) {
    const [newTask, setNewTask] = useState('');

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        createTask(newTask);
        setNewTask('');
    };
    
    function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    };

    return (
        <form className={styles.createTaskContainer} onSubmit={handleCreateTask}>
            <input 
                type="text" 
                onChange={handleNewTask} 
                placeholder="Adicione uma nova tarefa"
                value={newTask}
            />
            <button type="submit">
                Criar
                <PlusCircle size={16}/>
            </button>
        </form>
    );
};