import firebase from 'firebase/app'
import 'firebase/function';
//import 'firebase/firestore'; //必要なモジュールごとにimport
//例: Cloud Functionを使う場合は import 'firebase/function';

var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};

firebase.initializeApp(config)

export default firebase