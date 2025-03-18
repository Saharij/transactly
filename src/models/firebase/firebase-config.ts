import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { collection, getFirestore, doc, setDoc, getDoc, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

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
