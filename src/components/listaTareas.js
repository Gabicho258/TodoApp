import React from "react";
import PropTypes from "prop-types";
export default function ListaTareas({
  todos,
  handleToggle,
  handleEliminar,
  recibirEditable,
}) {
  const botonIncompleta = (id, done) => (
    <button
      className="btn btn-primary mr-2"
      onClick={() => handleToggle(id, done)}
    >
      Marcar incompleta
    </button>
  );
  const botonCompleta = (id, done) => (
    <button
      className="btn btn-primary mr-2"
      onClick={() => handleToggle(id, done)}
    >
      Marcar completada
    </button>
  );
  const botonEditar = (tarea) => (
    <button className="btn btn-warning" onClick={() => recibirEditable(tarea)}>
      Editar
    </button>
  );
  const botonEliminar = (id) => (
    <button className="btn btn-danger" onClick={() => handleEliminar(id)}>
      Eliminar
    </button>
  );

  return (
    <div className="row">
      {todos?.map((tarea, i) => (
        <div className="col-4 mb-4" key={i}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{tarea.title}</h5>
              <p className="card-text">
                {tarea.done ? "Tarea completada" : "Tarea incompleta"}
              </p>
              {tarea.done
                ? botonIncompleta(tarea._id, tarea.done)
                : botonCompleta(tarea._id, tarea.done)}
              {tarea.done ? botonEliminar(tarea._id) : botonEditar(tarea)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ListaTareas.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleEliminar: PropTypes.func.isRequired,
  recibirEditable: PropTypes.func.isRequired,
};
