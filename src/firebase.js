import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAZFkrSsfPGglXbPMNqbqB3Bh_1ibXCkiI",
  authDomain: "goals-b5e09.firebaseapp.com",
  databaseURL: "https://goals-b5e09.firebaseio.com",
  projectId: "goals-b5e09",
  storageBucket: "",
  messagingSenderId: "643340356137"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')
