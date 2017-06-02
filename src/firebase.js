import * as firebase from 'firebase';

const config ={
    apiKey: "AIzaSyCUmW7m5yU0pi8IyGfM7QbOnIe73Osx-jY",
    authDomain: "goalboss-5f88f.firebaseapp.com",
    databaseURL: "https://goalboss-5f88f.firebaseio.com",
    projectId: "goalboss-5f88f",
    storageBucket: "goalboss-5f88f.appspot.com",
    messagingSenderId: "110789174660"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
