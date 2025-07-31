import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/todoSlice';


const TodoList = () => {
  // const todos = useSelector((state) => state.todos);
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`cursor-pointer ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-600 hover:text-red-800"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
