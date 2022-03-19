import React, { useState, useEffect, useReducer } from "react";
import Formulario from "../components/Formulario.js";
import ListaTareas from "../components/ListaTareas.js";
// import tareas from "../utils/tareas";
// import { tareasReducer } from "../helpers/tareasReducer";
// import { useLocalStorage } from "../hooks/useLocalStorage";
// import { userInfo } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodoAsync,
  deleteTodoAsync,
  getTodosByUserAsync,
  todosByUser,
  updateTodoAsync,
} from "../slices/todoSlice";
import { Button } from "react-bootstrap";

export default function Principal() {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(null);
  // const user = useSelector(userInfo);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);
  const todos = useSelector(todosByUser);
  console.log("todos", todos);
  useEffect(() => {
    dispatch(getTodosByUserAsync(user.id));
  }, []);

  // función para agregar una nueva tarea
  const handleRegistrar = async (todo) => {
    await dispatch(createTodoAsync({ todo, id: user.id }));
    dispatch(getTodosByUserAsync(user.id));
  };

  // función para cambiar el estado de una tarea
  const handleToggle = async (id, done) => {
    await dispatch(updateTodoAsync({ id, done: !done }));
    dispatch(getTodosByUserAsync(user.id));
  };

  // funcion para recibir una tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  // funcion para editar una tarea
  const handleEditar = async ({ id, title }) => {
    await dispatch(updateTodoAsync({ id, title }));
    dispatch(getTodosByUserAsync(user.id));

    setEditable(null);
  };

  // Eliminar una tarea
  const handleEliminar = async (id) => {
    await dispatch(deleteTodoAsync(id));
    dispatch(getTodosByUserAsync(user.id));
  };

  // Renderizar el componente
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">
          Lista de tareas - {user?.name}
        </h1>
        <Formulario
          handleRegistrar={handleRegistrar}
          handleEditar={handleEditar}
          editable={editable}
        />
        <ListaTareas
          // listaTareas={listaTareas}
          todos={todos}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
        <Button
          variant="danger"
          type="button"
          onClick={() => {
            localStorage.removeItem("user");
            window.location = "/";
          }}
          className="mt-2 mb-2"
        >
          Cerrar sesión
        </Button>
      </div>
    </>
  );
}
