const firebase = require('@firebase/testing') //<--- You want this to be the top guy!!!
const admin = require('firebase-admin')

const projectId = "testfirebaseemulators"
process.env.GCLOUD_PROJECT = projectId
process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
let app = admin.initializeApp({projectId})
let db = firebase.firestore(app)

beforeAll(async ()=>{
    await firebase.clearFirestoreData({projectId});
})

// When Document written to '/TestCollection/{DocumentId}' , trigger function to copy it to '/Copies/{DocumentId}
test("Expect to find a copy in 'Copies' Collection", async ()=>{
    const testDoc = {
        name: 'Samer',
        age: 21,
        city: 'Riyadh'
    }

    const ref = db.collection('TestCollection').doc()
    await ref.set(testDoc)
    
    const copyId = ref.id

    const copyRef = db.collection('Copies').doc(copyId)

    await new Promise((r)=>setTimeout(r, 3000))

    const copyDoc = await copyRef.get()

    expect(copyDoc.data()).toStrictEqual(testDoc)
})