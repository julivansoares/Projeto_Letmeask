import firebase from '../../node_modules/firebase/compat/app';
//import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID


    apiKey: "AIzaSyA_GZJlpESwOBHjg5DrR35Yg5gluwteFag",
    authDomain:"letmeask-aula-ce6b0.firebaseapp.com",
    databaseURL:"https://letmeask-aula-ce6b0-default-rtdb.firebaseio.com",
    projectId: "letmeask-aula-ce6b0",
    storageBucket: "letmeask-aula-ce6b0.appspot.com",
    messagingSenderId: "283529282227",
    appId:"1:283529282227:web:f9753bce85d9108f9ae6c6"

};



firebase.initializeApp(firebaseConfig);
 
const auth = firebase.auth();

const database = firebase.database();
    
export {firebase, auth, database}