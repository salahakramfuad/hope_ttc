// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
//import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD3Mq9rWJwn5Xsv_VW7LOg5y6ViQ2Zmhgs',
  authDomain: 'hopettc.firebaseapp.com',
  projectId: 'hopettc',
  storageBucket: 'hopettc.firebasestorage.app',
  messagingSenderId: '964876293801',
  appId: '1:964876293801:web:45542d3ed538386b573bb8',
  measurementId: 'G-0P95CVG5FQ'
}

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
//const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }
