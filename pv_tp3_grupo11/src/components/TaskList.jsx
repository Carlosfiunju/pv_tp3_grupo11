import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <ul className="task-list">
    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default TaskList;