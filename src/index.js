import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, query, where } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnwNeh6ptFP_-qO4H2iqq0flqfaed2p9c",
    authDomain: "yard-751b4.firebaseapp.com",
    projectId: "yard-751b4",
    storageBucket: "yard-751b4.appspot.com",
    messagingSenderId: "1056475265471",
    appId: "1:1056475265471:web:abe2f99d90426e91f0090a",
    measurementId: "G-PL2015JJ7N"
  }

initializeApp(firebaseConfig);

const db = getFirestore();
const usersRef = collection(db, 'users');
const postsRef = collection(db, 'posts');

let allUsers = [];
let allPosts = [];

// Fetch data from the 'users' collection
getDocs(usersRef)
    .then((userSnapshot) => {
        userSnapshot.docs.forEach((userDoc) => {
            const userData = { userId: userDoc.id, ...userDoc.data() };
            allUsers.push(userData);
        });

        // Fetch data from the 'posts' collection
        return getDocs(postsRef);
    })
    .then((postsSnapshot) => {
        postsSnapshot.docs.forEach((postDoc) => {
            const postData = { postId: postDoc.id, ...postDoc.data() };
            allPosts.push(postData);
        });

        // Now you have all users in allUsers array and all posts in allPosts array
        console.log(allUsers);
        console.log(allPosts);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });





