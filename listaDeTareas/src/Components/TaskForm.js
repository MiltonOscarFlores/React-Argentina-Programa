import React, { useState } from "react";

const TaskForm = ({ onTaskAdd }) => {
  // Estado local para manejar la nueva tarea
  const [newTask, setNewTask] = useState("");

  // Función para manejar el cambio en la entrada de texto
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskAdd(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Entrada de texto para la nueva tarea */}
      <input
        type="text"
        placeholder="Escribí tu Nueva Tarea"
        value={newTask}
        onChange={handleInputChange}
      />
      {/* Botón para agregar la nueva tarea */}
      <button
        type="submit"
        className="btnAgregar"
      >
        🗸 Agregar
      </button>
    </form>
  );
};

export default TaskForm;
