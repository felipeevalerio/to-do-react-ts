import clipboardImg from '../../assets/Clipboard.svg';
import styles from './EmptyTask.module.scss';

export function EmptyTask () {
    return (
        <div className={styles.emptyTask}>
            <img src={clipboardImg} alt="You don't have any tasks registered." />
            <div className={styles.info}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
};