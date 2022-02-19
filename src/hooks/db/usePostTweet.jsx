import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { app } from "../../firebaseConfig";

const usePostTweet = (body) => {
  const db = getFirestore(app);
  const reference = doc(collection(db, "tweets"));
  const {
    userData: { username, color, uid },
  } = useContext(AppContext);
  const tweetPost = {
    body: body,
    color: color,
    date: new Date().toDateString().slice(4, 10),
    id: reference.id,
    uid: uid,
    likes: [],
    username: username,
  };
  const onClick = async () => {
    await setDoc(reference, tweetPost);
  };

  return onClick;
};

export { usePostTweet };
