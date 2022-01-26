import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import TodoStatus from "./components/TodoStatus";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-between">
      <div className="min-w-[40rem] mt-8 p-4 border-2 rounded-md bg-white shadow-lg">
        <Header />
        <div className="mt-3">
          {/* Add todo item */}
          <AddTodo />
          {/* List todo item */}
          <div className="mt-1 flex flex-col">
            <Todo />
            <Todo />
            <Todo />
          </div>
          {/* Item status and clear */}
          <TodoStatus />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
