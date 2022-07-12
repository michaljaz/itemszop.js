import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

export default (data) => {
	const {firebaseConfig, shopId} = data
  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)

  const shopRef = ref(db, `shops/${shopId}`)
  onValue(shopRef, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
  })
}
