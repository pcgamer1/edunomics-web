import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAimN_oAdzkda-rZL7RQ_IRio6fdWcQE-g",
    authDomain: "crwn-db-55bea.firebaseapp.com",
    databaseURL: "https://crwn-db-55bea.firebaseio.com",
    projectId: "crwn-db-55bea",
    storageBucket: "crwn-db-55bea.appspot.com",
    messagingSenderId: "323593545349",
    appId: "1:323593545349:web:7fb1e0d8e198f117e0abec",
    measurementId: "G-TR1P76MNCD"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user: ', error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data()
    
    return {
      routeName: encodeURI(title),
      id: doc.id,
      title, 
      items
    }
  })
  
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase