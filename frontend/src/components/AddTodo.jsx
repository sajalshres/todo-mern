import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTodo = () => {
  return (
    <div className="flex my-4">
      <input
        type="text"
        placeholder="Add an item"
        className="grow border-gray-400 border-2 rounded-md px-2 py-2"
      ></input>
      <button
        type="button"
        className="bg-green-600 border-green-600 border-2 rounded-md ml-1 px-2 py-2 w-10"
      >
        <FontAwesomeIcon icon={faPlus} color="white" />
      </button>
    </div>
  );
};

export default AddTodo;
