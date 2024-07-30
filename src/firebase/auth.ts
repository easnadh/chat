import { auth, db } from './config';
import { doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { uploadFile } from './storage.ts';

export const createUser = async (
  name: string,
  tag: string,
  email: string,
  password: string,
  avatarFile: File
) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  const avatarURL = await uploadFile(avatarFile);

  await setDoc(doc(db, 'users', response.user.uid), {
    name,
    tag,
    email,
    avatar: avatarURL,
    uid: response.user.uid,
  });

  await setDoc(doc(db, 'chats', response.user.uid), {
    chats: [],
  });
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOut = () => {
  return auth.signOut();
};
