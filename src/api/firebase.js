import firebase from 'firebase'
import settings from './settings'

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(settings)

// eslint-disable-next-line
export const db = firebase.database()
export default firebaseApp