const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex justify-between mb-4">
      <p className={todo.completed ? "line-through" : ""}>{todo.text}</p>
      <div className="flex gap-2 text-sm">
        <button
          type="button"
          className="bg-white rounded-md text-gray-800 px-4 py-1 cursor-pointer"
          onClick={() => {
            completeTodo(todo.id);
          }}
        >
          {!todo.completed ? "Done ✅ " : "Undo ↩"}
        </button>
        <button
          type="button"
          className="bg-white rounded-md text-gray-800 px-4 py-1 cursor-pointer"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>{" "}
      </div>
    </div>
  );
};

export default TodoItem;
