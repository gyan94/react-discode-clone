import {
  query,
  collection,
  onSnapshot,
  DocumentData,
  CollectionReference,
  Query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { db } from "../firebase";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setdocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  // コレクション内の複数のドキュメントのリッスン
  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setdocuments(channelsResults);
    });
  }, []);
  return { documents };
};

export default useCollection;
