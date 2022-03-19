export const useLocalStorage = (key, initialState) => {
  const init = () => {
    return JSON.parse(localStorage.getItem(key)) || initialState;
  };
  const updateStorage = (tareas) => {
    localStorage.setItem(key, JSON.stringify(tareas));
  };
  return [init, updateStorage];
};
