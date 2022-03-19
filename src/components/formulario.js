import React, { useState, useEffect } from "react";

export default function Formulario(props) {
  // estado del componente
  const [title, setTitle] = useState("");

  // funcion propia del componente que puede emitir 2 funciones dependiendo de una propiedad
  const handleClick = (event) => {
    // prevenir redirección
    event.preventDefault();

    if (!props.editable) {
      // registrar una nueva tarea
      const todo = {
        title: title,
      };
      props.handleRegistrar(todo);
    } else {
      // editar una tarea
      props.handleEditar({
        id: props.editable._id,
        title: title,
        done: props.editable.done,
      });
    }
    // limpiar el formulario
    setTitle("");
  };

  // dos ciclos de vida, cuando el componente se monta por primera vez y cuando el componente se actualiza segun una propiedad de su estado
  useEffect(() => {
    if (props.editable) {
      setTitle(props.editable.title);
    }
  }, [props.editable]);

  return (
    <form className="col-4 ml-auto m-auto mb-5">
      <div className="form-group">
        <label>Titulo de la tarea</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <small className="form-text text-muted">
          Escribe la tarea que deseas registrar
        </small>
      </div>
      <button
        type="submit"
        className={props.editable ? "btn btn-warning" : "btn btn-primary"}
        onClick={handleClick}
        disabled={!title}
      >
        {props.editable ? "Editar" : "Registrar"}
      </button>
    </form>
  );
}
