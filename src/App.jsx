import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/todo")
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kirim data ke backend atau lakukan operasi lainnya sesuai kebutuhan
    console.log("Tambah Todo:", newTodo);
    setNewTodo("");
  };

  return (
    <>
      <h1>Daftar Todo</h1>

      <p>Tambah Data</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Tambah</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.ID}>{todo.Title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
