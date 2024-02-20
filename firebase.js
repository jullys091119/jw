

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5JKeh2I_ivix6PLJEzfCIqgM94XzS1cw",
  authDomain: "jwpersonal-720f8.firebaseapp.com",
  projectId: "jwpersonal-720f8",
  storageBucket: "jwpersonal-720f8.appspot.com",
  messagingSenderId: "1014726810080",
  appId: "1:1014726810080:web:db0396b48165382167f385",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const readData = async (id) => {
 const publications = await getDocs (collection(db, "publicaciones"));
 let  obj = []
 publications.forEach((doc)=> {
    id = doc.id
    const publication = {
    id: doc.id,
    imagen: doc.data().foto,
    titulo: doc.data().titulo,
    questions: doc.data().preguntas,
    answers: doc.data().respuestas
   }
  
   obj.push(publication)

  })
 
  return obj
}

export { db, readData };