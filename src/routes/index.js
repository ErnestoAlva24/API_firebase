const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require('../../infinachat-firebase-adminsdk-n6u87-8365e8e835.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

router.get('/',(req,res) => {
    res.send({ message: "Hola mundo!"});
});

router.get('/getUsers',(req,res) => {
    let data = [];
  db.collection("users").get().
    then((snapshot) => {
        snapshot.forEach((doc) => {
            data.push(doc.data().username);
        });
            
            res.send(data);
        })
    .catch((err) => {
        console.log("Error getting documents", err);
    });
});

module.exports = router;