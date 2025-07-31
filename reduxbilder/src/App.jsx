import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-2xl mx-auto shadow-lg rounded-lg bg-white dark:bg-gray-800 p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">📝 Todo Manager</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
