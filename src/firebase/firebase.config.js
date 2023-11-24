// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCj0lpH75nZKKU4MMUZcDH8rxnC3sIUQ7Q',
	authDomain: 'invento-hub.firebaseapp.com',
	projectId: 'invento-hub',
	storageBucket: 'invento-hub.appspot.com',
	messagingSenderId: '917863485275',
	appId: '1:917863485275:web:034b67eddb5d3765a3147e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
