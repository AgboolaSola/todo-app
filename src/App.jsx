import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
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

  const filterTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed === true;
    } else if (filter === "active") {
      return todo.completed === false;
    } else {
      return true;
    }
  });

  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-12 px-4">
        <section className="w-full max-w-lg">
          <h1 className="mb-4">My Task</h1>
          <TodoInput onAdd={addTodo} />
          <FilterBar filter={filter} setFilter={setFilter} />
          <TodoList
            todos={filterTodos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </section>
      </main>
    </>
  );
}

export default App;
