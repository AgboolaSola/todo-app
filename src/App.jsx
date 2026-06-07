import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
function App() {
  const [todos, setTodos] = useState([]);
  const todoConstructor = (text) => {
    return { id: Date.now(), text: text, completed: false };
  };
  const addTodo = (text) => {
    const newTodo = todoConstructor(text);

    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return { ...todo };
        }
      }),
    );
  };

  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-12 px-4">
        <section className="w-full max-w-lg">
          <h1 className="mb-4">My Task</h1>
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
          <FilterBar />
        </section>
      </main>
    </>
  );
}

export default App;
