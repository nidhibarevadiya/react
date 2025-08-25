import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const bookCollection = collection(db, "Books");

const BookService = {
  CreateBook: async (book) => {
    try {
      await addDoc(bookCollection, book);
    } catch (err) {
      console.log("Error Adding Book", err);
    }
  },

  GetBooks: async () => {
    try {
      const snapshot = await getDocs(bookCollection);
      return snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));
    } catch (err) {
      console.log("Error Getting Books", err);
      return [];
    }
  },

  UpdateBook: async (id, updatedBook) => {
    try {
      await updateDoc(doc(db, "Books", id), updatedBook);
    } catch (err) {
      console.log("Error Updating Book", err);
    }
  },

  RemoveBook: async (id) => {
    try {
      await deleteDoc(doc(db, "Books", id));
    } catch (err) {
      console.log("Error Deleting Book", err);
    }
  },
};

export default BookService;
