import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const BookForm = ({ editingBook, setEditingBook, fetchBooks }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (editingBook) {
      setName(editingBook.name);
      setAuthor(editingBook.author);
      setPrice(editingBook.price);
      setImageUrl(editingBook.imageUrl);
    }
  }, [editingBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingBook) {
      await updateDoc(doc(db, "books", editingBook.id), {
        name, author, price, imageUrl
      });
      setEditingBook(null);
    } else {
      await addDoc(collection(db, "books"), { name, author, price, imageUrl });
    }
    fetchBooks();
    setName(""); setAuthor(""); setPrice(""); setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Book Name" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <button type="submit">{editingBook ? "Update Book" : "Add Book"}</button>
    </form>
  );
};

export default BookForm;
