import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AddTodo = ({ saveTodo }) => {
  const [form, setForm] = useState();

  const handleTitleChange = (e) => {
    setForm({ ...form, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(form);
    setForm();
    e.target.reset();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="flex my-4">
        <input
          id="title"
          type="text"
          placeholder="Add an item"
          className="grow border-gray-400 border-2 rounded-md px-2 py-2"
          onChange={handleTitleChange}
        ></input>
        <button
          type="submit"
          className="bg-green-600 border-green-600 border-2 rounded-md ml-1 px-2 py-2 w-10"
          disabled={form === undefined ? true : false}
        >
          <FontAwesomeIcon icon={faPlus} color="white" />
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
