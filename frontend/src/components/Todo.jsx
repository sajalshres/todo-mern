import { useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { debounce } from "lodash";

const Todo = ({ todo, updateTodo, removeTodo }) => {
  const todoInput = useRef(null);

  useEffect(() => {
    todoInput.current.value = todo.title;
  });

  const handleCheckboxChange = () => {
    todo = { ...todo, status: !todo.status };
    updateTodo(todo);
  };

  const handleTitleChange = (title) => {
    todo = { ...todo, title: title };
    updateTodo(todo);
  };

  const handleEditClick = () => {
    if (todoInput.current) todoInput.current.focus();
  };

  const debounceHandler = useCallback(debounce(handleTitleChange, 1000), []);

  return (
    <div className="mt-1 p-2 bg-gray-100 rounded-md flex flex-row items-center">
      <input
        type="checkbox"
        className="border-black border-2"
        checked={todo.status}
        onChange={handleCheckboxChange}
      ></input>
      <input
        id="edit-title"
        type="text"
        className="grow ml-1 px-2 py-1 bg-gray-100"
        ref={todoInput}
        onChange={(event) => debounceHandler(event.target.value)}
      ></input>
      <button
        type="button"
        className="ml-1 px-2 py-1 w-10 bg-indigo-500 rounded-md"
        onClick={handleEditClick}
      >
        <FontAwesomeIcon icon={faEdit} color="white" />
      </button>
      <button
        type="button"
        className="ml-1 px-2 py-1 w-10 bg-red-500 rounded-md"
        onClick={() => removeTodo(todo._id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} color="white" />
      </button>
    </div>
  );
};

export default Todo;
