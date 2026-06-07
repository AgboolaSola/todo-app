import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    );
  });
};

export default TodoList;
