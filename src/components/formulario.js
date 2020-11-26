import React, { useState } from "react";

export default function Formulario(props) {
  const [titulo, setTitulo] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    props.handleRegistrar(titulo);
  };

  return (
    <form className="col-4 ml-auto mr-auto mb-5">
      <div className="form-group">
        <label>Titulo de la tarea</label>
        <input
          type="text"
          className="form-control"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <small className="form-text text-muted">
          Escribe la tarea que deseas registrar
        </small>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Registrar
      </button>
    </form>
  );
}
