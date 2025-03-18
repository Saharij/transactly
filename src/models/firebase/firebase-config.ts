// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { collection, getFirestore, doc, setDoc, getDoc, getDocs } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAAa5M-hHrkaOWqR4Tl4_FHFssqew4qq80',
  authDomain: 'transactly-6aa07.firebaseapp.com',
  projectId: 'transactly-6aa07',
  storageBucket: 'transactly-6aa07.firebasestorage.app',
  messagingSenderId: '949200998533',
  appId: '1:949200998533:web:793e12d6a11bfb893f19ec',
  measurementId: 'G-HYZVTEPQ4K',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

const db = getFirestore(app)

// const usersRef = collection(db, 'users')
// const usersDoc = doc(db, 'users', 'firstName')

export const loadUsers = async () => {
  const usersDoc = collection(db, 'users')
  const docSnap = await getDocs(usersDoc)

  console.log(docSnap.docs[0].data())
}
