import ItemSzop from './index.js'

(async () => {
  const shop = new ItemSzop()
  await shop.init({
    firebaseConfig: {
  	  apiKey: 'AIzaSyAgqotnCT9d_zcmwrE8mHWiC9JL8r75U-s',
  	  authDomain: 'sklepmc-c7516.firebaseapp.com',
  	  databaseURL: 'https://sklepmc-c7516-default-rtdb.europe-west1.firebasedatabase.app',
  	  projectId: 'sklepmc-c7516',
  	  storageBucket: 'sklepmc-c7516.appspot.com',
  	  messagingSenderId: '889784816765',
  	  appId: '1:889784816765:web:7c84a7bce9b480ce7d4d14'
    },
    shopId: 'gitcraft'
  })

  console.log(shop.getServers())
  console.log(shop.getConfig())
  console.log(shop.getShop())
})()
