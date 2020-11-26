import React, { useState, useEffect } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";

export default function Principal() {
  const [listaTareas, setListaTareas] = useState([]);

  useEffect(() => {
    setListaTareas(tareas);
  }, []);

  const handleRegistrar = (tarea) => {
    const ultimoId = listaTareas[listaTareas.length - 1].id;
    setListaTareas([
      ...listaTareas,
      { id: ultimoId + 1, titulo: tarea, completado: false },
    ]);
  };

  const handleToggle = (id) => {};

  const handleEditar = (nuevaTarea, id) => {};

  const handleEliminar = () => {};

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario handleRegistrar={handleRegistrar} />
        <ListaTareas listaTareas={listaTareas} />
      </div>
    </>
  );
}
