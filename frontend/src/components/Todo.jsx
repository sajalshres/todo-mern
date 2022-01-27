import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ title }) => {
  return (
    <div className="mt-1 p-2 bg-gray-100 rounded-md flex flex-row items-center">
      <input type="checkbox" className="border-black border-2"></input>
      <input
        type="text"
        className="grow ml-1 px-2 py-1 bg-gray-100"
        value={title}
      ></input>
      <button
        type="button"
        className="ml-1 px-2 py-1 w-10 bg-indigo-500 rounded-md"
      >
        <FontAwesomeIcon icon={faEdit} color="white" />
      </button>
      <button
        type="button"
        className="ml-1 px-2 py-1 w-10 bg-red-500 rounded-md"
      >
        <FontAwesomeIcon icon={faTrashAlt} color="white" />
      </button>
    </div>
  );
};

export default Todo;
