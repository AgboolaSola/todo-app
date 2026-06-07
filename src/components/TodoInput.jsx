import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    onAdd(input.trim());
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="mb-8 flex gap-4">
      <input
        type="text"
        className="border border-gray-400 rounded-md px-4 py-1"
        id="search"
        name="search"
        placeholder="Add a new task..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="bg-white text-gray-900 cursor-pointer px-4 py-1 rounded-md"
      >
        + Add
      </button>
    </form>
  );
};

export default TodoInput;
