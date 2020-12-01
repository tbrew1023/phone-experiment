import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './firebase-config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();

export function fireFetch(collection, twix1, twix2, then) {
    var finalThen;
    
    if(typeof twix1 == "function") { //fetch entire collection
        finalThen = twix1;
        db.collection(collection)
        .get()
        .then((docs) => {
            finalThen(docs);
        });
    } else { //query fetch
        var splitQuery = twix1.split(' ');

        if(typeof twix2 == "function") {
            finalThen = twix2;
            db.collection(collection)
            .where(splitQuery[0], splitQuery[1], eval(substring(0,splitQuery[2].length)))
            .get()
            .then((docs) => {
                finalThen(docs);
            });
        } else { //order data by...
            finalThen = then;
            db.collection(collection)
            .where(splitQuery[0], splitQuery[1], eval(splitQuery[2].substring(1,splitQuery[2].length)))
            .orderBy(twix2)
            .get()
            .then((docs) => {
                finalThen(docs);
            });
        }
    }
}

export function firePost(type, collection, data) {
    //const { id, newStatus } = event.detail;
    if(type == 'update') {
        db.collection(collection)
        .doc(eval(doc.substring(1,doc.length)))
        .update(data);
    } else if(type == 'set') {
        db.collection(collection)
        .doc()
        .set(data);
    } else if(type == 'delete') {
        db.collection(collection)
        .doc(eval(doc.substring(1,doc.length)))
        .delete();
    } else {
        console.error("Invaild mutation type. Must be 'update', 'set', or 'delete'.");
    }
}