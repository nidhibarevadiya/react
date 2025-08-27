import { useEffect, useState } from "react";
import TaskList from "../service/Tasks";

const AddTaskForm = ({ editingTask, setEditingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingTask) {
      await TaskList.UpdateTask(editingTask.id, formData);
      setEditingTask(null);
    } else {
      const newTask = {
        ...formData,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      await TaskList.CreateTask(newTask);
    }

    setFormData({ title: "", description: "" });
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center w-full py-8">
      <div className="max-w-md w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {editingTask ? "✏️ Edit Task" : "📝 Add New Task"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
         
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter task title..."
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter task description..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] transition"
            />
          </div>

        
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            {editingTask ? "✅ Update Task" : "➕ Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
