import React, { useState } from "react";
import Box from "@mui/material/Box";

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  // Estado local para manejar la propiedad 'completed' de la tarea
  const [completed, setCompleted] = useState(false);

  // Función para manejar el clic en el botón 'Completar'
  const handleCompleteClick = () => {
    setCompleted(!completed);
    onTaskComplete(task.id);
  };

  // Función para manejar el clic en el botón 'Eliminar'
  const handleDeleteClick = () => {
    onTaskDelete(task.id);
  };

  return (
    <li className={`task-item ${completed ? "completed" : ""}`}>
      {/* Mostrar el nombre de la tarea */}

      <Box>{task.name}</Box>
      {/* Botones para completar y eliminar la tarea */}
      <Box
        marginTop={3}
        textAlign={"center"}
      >
        <button
          className="Completar"
          onClick={handleCompleteClick}
        >
           Completar
        </button>
        <button
          className="Eliminar"
          onClick={handleDeleteClick}
        >
           Eliminar
        </button>
      </Box>
    </li>
  );
};

export default TaskItem;
