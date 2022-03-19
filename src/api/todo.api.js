const API_SERVER = "https://todo-app-v2.herokuapp.com";
// const API_SERVER = "http://localhost:5000";

const ENDPOINTS = {
  GET_TODOS_BY_USER: "/api/todos/user",
  CREATE: "/api/todos/create",
  DELETE: "/api/todos/delete",
  UPDATE: "/api/todos/update",
};

export const getTodosByUser = (id) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_TODOS_BY_USER}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const createTodo = (todo, userId) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  console.log("API === TODO");
  console.log(todo);
  console.log("API === ID");
  console.log(userId);
  const path = `${API_SERVER}${ENDPOINTS.CREATE}/${userId}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const deleteTodo = (id) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const path = `${API_SERVER}${ENDPOINTS.DELETE}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const updateTodo = ({ id, ...todo }) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const path = `${API_SERVER}${ENDPOINTS.UPDATE}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
