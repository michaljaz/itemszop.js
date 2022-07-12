import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get } from 'firebase/database'

class ItemSzop {
  constructor () {
    this.shop = {}
  }
  async init ({firebaseConfig, shopId}) {
    const db = getDatabase(initializeApp(firebaseConfig))
    this.shop = (await get(ref(db, `shops/${shopId}`))).val()
    this.servers = {}
    for (const serverId in this.shop.servers) {
      this.servers[serverId] = (await get(ref(db, `servers/${serverId}/serverName`))).val()
    }
    this.config = {
      microsms_sms_text: (await get(ref(db, `config/${shopId}/microsms_sms_text`))).val(),
      lvlup: (await get(ref(db, `config/${shopId}/lvlup`))).val(),
      microsms: (await get(ref(db, `config/${shopId}/microsms`))).val(),
      paypal: (await get(ref(db, `config/${shopId}/paypal`))).val(),
      paypal_id: (await get(ref(db, `config/${shopId}/paypal_id`))).val()
    }
  }
  getServers () {
    return this.servers
  }
  getConfig () {
    return this.config
  }
  getShop () {
    return this.shop
  }
}

export default ItemSzop
