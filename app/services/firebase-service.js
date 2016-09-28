/**
  {
    apiKey: "...",
    authDomain: "<name>.firebaseapp.com",
    databaseURL: "https://<name>.firebaseio.com",
    storageBucket: "<name>.appspot.com",
  }
 */
import firebase from 'firebase'

const keys = process.env.FIREBASE_KEYS

let parsedKeys = keys

if (typeof keys === "string") {
  parsedKeys = JSON.parse(keys)
}

firebase.initializeApp(parsedKeys)

export default firebase

export class FirebaseModel {
  getReferenceUrl(key) {
    if (key) {
      return `${this.reference}/${key}`
    }

    return `${this.reference}/`
  }

  get default() {
    return {}
  }

  converter(data) {
    return {}
  }

  constructor() {
    this.reference = ""
  }

  createKey() {
    return firebase
      .database()
      .ref(this.getReferenceUrl())
      .push()
      .key
  }

  getReference(key) {
    return firebase
      .database()
      .ref(this.getReferenceUrl(key ? key : null))
  }

  delete(key) {
    return this.getReference(key).remove()
  }

  update(key, data) {
    return this.getReference(key).update(data)
  }

  set(data) {
    return this.getReference().set(data)
  }

  create(data) {
    return this
      .getReference(this.createKey())
      .set(
        Object.assign(
          this.default, 
          data, 
          this.converter(data)
        )
      )
  }
}