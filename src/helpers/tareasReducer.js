export const tareasReducer = (state, action) => {
  switch (action.type) {
    case "init":
      return action.payload;
    case "registrar":
      return [...state, action.payload];
    case "toggle":
      return state.map((tarea) =>
        tarea.id === action.payload
          ? { ...tarea, completado: !tarea.completado }
          : tarea
      );
    case "eliminar":
      return state.filter((tarea) => tarea.id !== action.payload);
    case "editar":
      return state.map((tarea) =>
        tarea.id === action.payload.id
          ? {
              id: action.payload.id,
              titulo: action.payload.titulo,
              completado: action.payload.completado,
            }
          : tarea
      );
    default:
      return state;
  }
};
