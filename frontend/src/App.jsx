import { useEffect, useState } from "react";
import { fetchTodos } from "./services/api";

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
    fetchTodos().then(({ data }) => {
      setTodos(data);
    });
  }, []);

  const onSaveTodo = (form) => {
    setTodos([...todos, { ...form }]);
  };

  return (
    <main className="w-screen h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-between">
      <div className="min-w-[40rem] mt-8 p-4 border-2 rounded-md bg-white shadow-lg">
        <Header />
        <div className="mt-3">
          {/* Add todo item */}
          <AddTodo saveTodo={onSaveTodo} />
          {/* List todo item */}
          <div className="mt-1 flex flex-col">
            {todos.map((todoItem, idx) => (
              <Todo key={idx} title={todoItem.title} />
            ))}
          </div>
          {/* Item status and clear */}
          <div className="mt-4 py-2 px-1 flex flex-row">
            <TodoStatus count={todos.length} />
            <ClearAll />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default App;
