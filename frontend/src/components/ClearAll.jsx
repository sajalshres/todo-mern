const ClearAll = ({ clearAllTodo }) => {
  return (
    <button
      type="button"
      className="rounded-md bg-red-500 text-white px-2 py-1"
      onClick={clearAllTodo}
    >
      Clear All
    </button>
  );
};

export default ClearAll;
