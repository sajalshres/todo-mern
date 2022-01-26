const TodoStatus = () => {
  return (
    <div className="mt-4 py-2 px-1 flex flex-row">
      <p className="grow">You have 3 pending items</p>
      <button
        type="button"
        className="rounded-md bg-red-500 text-white px-2 py-1"
      >
        Clear All
      </button>
    </div>
  );
};

export default TodoStatus;
