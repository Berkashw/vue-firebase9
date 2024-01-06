import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB6aC56WOUbs1Qy7y6w-1pjnUw6u-nVass',
  authDomain: 'fir-todo-8df3b.firebaseapp.com',
  projectId: 'fir-todo-8df3b',
  storageBucket: 'fir-todo-8df3b.appspot.com',
  messagingSenderId: '1074022886183',
  appId: '1:1074022886183:web:d7851bd6fb2394a71fd702'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
