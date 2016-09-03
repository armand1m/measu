import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAdMiHEaePA90FY_5P4VMjMrotQDAW0vHU",
  authDomain: "measu-a46f5.firebaseapp.com",
  databaseURL: "https://measu-a46f5.firebaseio.com",
  storageBucket: "measu-a46f5.appspot.com",
};

firebase.initializeApp(config);

function requireAuth(nextState, replace) {
  if(null === firebase.auth().currentUser) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default firebase

export function isAuthenticated() {
  return !!firebase.auth().currentUser
}