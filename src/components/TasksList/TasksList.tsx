import React from 'react';
import styles from './TasksList.module.scss';

const TasksList = ({tasks}) => {
    return (
        <ul className={styles.list}>
            {tasks.map(task =>
                <li key={task.number}>
                    {task.title}
                </li>
            )}
        </ul>
    );
};

export default TasksList;