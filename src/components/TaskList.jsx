function TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.done ? "[x]" :"[ ]"} {task.text}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;