import React, { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import "../src/index.css";
import Paper from "@mui/material/Paper";

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    return tasksFromLocalStorage || [];
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Mostrar el mensaje de éxito al borrar la tarea
    setShowSuccessMessage(true);
  };

  const handleTaskAdd = (newTaskName) => {
    if (!newTaskName.trim()) {
      alert("Por favor, ingresa un nombre válido para la tarea.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // useEffect para ocultar el mensaje después de 3 segundos
  useEffect(() => {
    if (showSuccessMessage) {
      const timeoutId = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2500);

      // Limpiar el timeout cuando el componente se desmonta o cuando showSuccessMessage cambia
      return () => clearTimeout(timeoutId);
    }
  }, [showSuccessMessage]);

  return (
    <Paper
      elevation={4}
      style={{
        padding: 16,
        width: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h1> Mi Lista de Tareas </h1>
      <TaskForm onTaskAdd={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleTaskDelete}
      />

      {showSuccessMessage && (
        <div
          style={{
            color: "red",
            textAlign: "center",
            fontWeight: "bold",
            border: "1px solid red",
            padding: "5px",
          }}
        >
          ¡Tarea eliminada con éxito!
        </div>
      )}
    </Paper>
  );
}

export default App;
