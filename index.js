import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgqotnCT9d_zcmwrE8mHWiC9JL8r75U-s",
  authDomain: "sklepmc-c7516.firebaseapp.com",
  databaseURL: "https://sklepmc-c7516-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sklepmc-c7516",
  storageBucket: "sklepmc-c7516.appspot.com",
  messagingSenderId: "889784816765",
  appId: "1:889784816765:web:7c84a7bce9b480ce7d4d14"
};
const shopId = "gitcraft"

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const shopRef = ref(db, `shops/${shopId}`)
onValue(shopRef, (snapshot)=>{
	const data = snapshot.val()
	console.log(data)
})
