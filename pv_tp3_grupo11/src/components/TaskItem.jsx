const TaskItem = ({ task, onToggle, onDelete }) => (
  <li className="task-item">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
    />
    <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
    </span>
    <button onClick={() => onDelete(task.id)}>Eliminar</button>
  </li>
);

export default TaskItem;