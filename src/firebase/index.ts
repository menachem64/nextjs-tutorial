import admin from "firebase-admin";
import {getApps} from 'firebase-admin/app';
import serviceAccount from '@/firebase/config'

import { initializeApp } from "firebase-admin/app";
import { getStorage } from 'firebase-admin/storage';


if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    storageBucket: 'nextjs-tutorial-e986b.appspot.com' // הוסף את שם ה-Bucket שלך כאן

  });
}

export const firestore = admin.firestore();
export const storage = admin.storage(admin.app());



