import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
   
  ]);

  const [form, setForm] = useState({ name: "", author: "", price: "" });

  const handleAdd = () => {
    if (!form.name || !form.author || !form.price) return;
    setBooks([...books, { id: Date.now(), ...form }]);
    setForm({ name: "", author: "", price: "" });
  };

  const handleDelete = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const handleEdit = (id) => {
    const book = books.find((b) => b.id === id);
    if (book) setForm(book);
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div className="container">
      <h1>📚 Book Manager</h1>

      {/* Book List */}
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-info">
              <span className="book-name">{book.name}</span>
              <span className="book-author">by {book.author}</span>
              <span className="book-price">₹ {book.price}</span>
            </div>
            <div>
              <button className="btn btn-edit" onClick={() => handleEdit(book.id)}>
                ✏️ Edit
              </button>
              <button className="btn btn-delete" onClick={() => handleDelete(book.id)}>
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Book Form */}
      <div className="add-book-form">
        <h2>Add / Edit Book</h2>
        <input
          type="text"
          placeholder="Book Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button onClick={handleAdd}>💾 Save Book</button>
      </div>
    </div>
  );
}

export default App;
