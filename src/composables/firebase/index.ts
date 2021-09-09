import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: 'planning-poker-ad3de.firebaseapp.com',
  databaseURL: 'https://planning-poker-ad3de-default-rtdb.firebaseio.com',
  projectId: 'planning-poker-ad3de',
  storageBucket: 'planning-poker-ad3de.appspot.com',
  messagingSenderId: '854504189677',
  appId: '1:854504189677:web:81a3af7e4438fb82b9e6e4',
  measurementId: 'G-QPMTB1WC75',
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase()
export * from './decks'
export default app
