import { db } from "../firebase/firebase.config";
import { collection , addDoc , getDocs , doc , updateDoc , deleteDoc } from "firebase/firestore";

const taskCollection = collection(db , "tasks")

// Create Method

export const addTask = async(task) => {
  try{
    await addDoc(taskCollection , task)
  }catch(err){
    console.log("Error Adding Task:" , err);    
  }
}

// Read Method

export const getTasks = async() => {
  try{
    const readData = await getDocs(taskCollection)
    return readData.docs.map((doc) => ({
      id:doc.id,
      ...doc.data()
    }))
  }catch(err){
    console.log("Error Getting Tasks:" , err);
    return [];
  }
}

// Update Method

export const updateTask = async(id , updatedTask) => {
  try{
    await updateDoc(doc(db , "tasks" , id) , updatedTask)
  }catch(err){
    console.log("Error Updating Tasks:" , err);
  }
}

// Delete Method

export const deleteTask = async(id) => {
  try{
    await deleteDoc(doc(db , "tasks" , id));
  }catch(err){
    console.log("Error deleting tasks:" , err);
  }
}





