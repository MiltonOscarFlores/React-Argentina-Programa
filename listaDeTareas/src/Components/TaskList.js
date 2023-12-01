import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  // Función para manejar la eliminación de tareas
  const handleTaskDelete = (taskId) => {
    console.log("Eliminando tarea desde Tasklist:", taskId);
    onTaskDelete(taskId);
  };

  return (
    <ul>
      {/* Mapear sobre la lista de tareas y renderizar cada tarea */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={handleTaskDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
