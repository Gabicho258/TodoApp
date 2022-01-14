import React, { useState, useEffect, useReducer } from "react";
import Formulario from "../components/Formulario";
import ListaTareas from "../components/ListaTareas";
import tareas from "../utils/tareas";
import { tareasReducer } from "../helpers/tareasReducer";

export default function Principal() {
  // Estados del componente
  const [todos, dispatch] = useReducer(tareasReducer, []);
  const [editable, setEditable] = useState(null);

  useEffect(() => {
    dispatch({
      type: "init",
      payload: tareas,
    });
  }, []);

  // función para agregar una nueva tarea
  const handleRegistrar = (tarea) => {
    // Validación si hay tareas para evitar error
    const ultimoId = todos[todos.length - 1]?.id ?? 0;
    const todo = { id: ultimoId + 1, titulo: tarea, completado: false };
    const action = {
      type: "registrar",
      payload: todo,
    };
    dispatch(action);
  };

  // función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  // funcion para recibir una tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  // funcion para editar una tarea
  const handleEditar = (nuevaTarea) => {
    const action = {
      type: "editar",
      payload: nuevaTarea,
    };

    dispatch(action);
    setEditable(null);
  };

  // Eliminar una tarea
  const handleEliminar = (id) => {
    const action = {
      type: "eliminar",
      payload: id,
    };
    dispatch(action);
  };

  // Renderizar el componente
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario
          handleRegistrar={handleRegistrar}
          handleEditar={handleEditar}
          editable={editable}
        />
        <ListaTareas
          // listaTareas={listaTareas}
          listaTareas={todos}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
      </div>
    </>
  );
}
