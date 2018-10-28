import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: process.env.FIREBASE_AUTH_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// firebase.database().ref().set({
//     name: "byungmin",
//     age: 28,
//     isSingle: true,
//     location: {
//         city: 'Seoul',
//         country: 'South Korea'
//     }
// });

// firebase.database().ref().update({
//     name: "CHOI BYUNGMIN"
// })

// firebase.database().ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     })
