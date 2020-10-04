import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA7wMuo_5RgbR-Z7Ob2awhas1MjZ2JPGXY',
  authDomain: 'covidev-safira.firebaseapp.com',
  databaseURL: 'https://covidev-safira.firebaseio.com',
  projectId: 'covidev-safira',
  storageBucket: 'covidev-safira.appspot.com',
  messagingSenderId: '260754958016',
  appId: '1:260754958016:web:bf0a21611a213e35beef25',
  measurementId: 'G-YPZ0PJ119H'
}

const app = firebase
if (!app.apps.length) {
  app.initializeApp(firebaseConfig)
}

export const database = app.firestore()
export default firebase
