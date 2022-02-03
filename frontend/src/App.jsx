import { useEffect, useState } from "react";
import api from "./services/api";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import TodoStatus from "./components/TodoStatus";
import ClearAll from "./components/ClearAll";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.get("/").then(({ data }) => {
      setTodos(data);
    });
  }, []);

  const saveTodo = (form) => {
    const todo = {
      title: form.title,
      status: false,
    };

    api.post("/", todo).then(({ data }) => {
      setTodos([...todos, { ...data }]);
    });
  };

  const updateTodo = (item) => {
    api.patch(`/${item._id}`, item).then(({ data }) => {
      const index = todos.findIndex((todo) => todo._id === item._id);
      if (index !== -1) {
        todos.splice(index, 1, data);
        setTodos([...todos]);
      }
    });
  };

  const removeTodo = (id) => {
    api.delete(`/${id}`).then(() => {
      const index = todos.findIndex((item) => item._id === id);
      if (index !== -1) {
        todos.splice(index, 1);
        setTodos([...todos]);
      }
    });
  };

  const clearAllTodo = () => {
    api.post("/clear/").then(() => {
      todos.forEach((todo) => {
        todo.status = false;
      });
      setTodos([...todos]);
    });
  };

  return (
    <main className="w-screen h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-between">
      <div className="min-w-[40rem] mt-8 p-4 border-2 rounded-md bg-white shadow-lg">
        <Header />
        <div className="mt-3">
          {/* Add todo item */}
          <AddTodo saveTodo={saveTodo} />
          {/* List todo item */}
          <div className="mt-1 flex flex-col">
            {todos.map((todo) => (
              <Todo
                key={todo._id}
                todo={todo}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
              />
            ))}
          </div>
          {/* Item status and clear */}
          <div className="mt-4 py-2 px-1 flex flex-row">
            <TodoStatus
              count={todos.filter((todo) => todo.status === false).length}
            />
            <ClearAll clearAllTodo={clearAllTodo} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default App;
