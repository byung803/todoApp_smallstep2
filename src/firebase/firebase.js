import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDMLRVH92HxpfY_xAeeFw0BoszMVxiWTys",
    authDomain: "todoapp-smallstep.firebaseapp.com",
    databaseURL: "https://todoapp-smallstep.firebaseio.com",
    projectId: "todoapp-smallstep",
    storageBucket: "todoapp-smallstep.appspot.com",
    messagingSenderId: "616869968323"
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
