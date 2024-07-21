import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQ_od2vyYFyoSl6b2XmTax5Afla2lDWJQ",
    authDomain: "recipe-site-36156.firebaseapp.com",
    projectId: "recipe-site-36156",
    storageBucket: "recipe-site-36156.appspot.com",
    messagingSenderId: "560703899407",
    appId: "1:560703899407:web:2ddf3adc35528873aa607a"
  };



//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export {projectFirestore}