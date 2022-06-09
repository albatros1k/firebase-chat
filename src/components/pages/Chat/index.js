import { useState, Fragment, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";

import { Input } from "components/common/input";
import { Loader } from "components/common/loader";
import { Button, Card, Column, Row } from "components/common/styled";
import { Avatar, Heading } from "components/pages/Chat/styled";
import { FireBaseContext } from "index";

export const Chat = () => {
  const { auth, firestore } = useContext(FireBaseContext);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(firestore.collection("messages").orderBy("createdAt"));
  const [text, setText] = useState("");

  const sendMessage = async () => {
    firestore
      .collection("messages")
      .add({ uid: user.uid, displayName: user.displayName, photoURL: user.photoURL, text, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    setText("");
  };

  const onChangeMessage = (e) => setText(e.target.value);

  if (loading) return <Loader />;
  return (
    <Fragment>
      <Card m="0 0 20px" h="500px" style={{ overflow: "scroll" }}>
        {messages.map(({ displayName, text, photoURL, uid }, index) => (
          <Column m="0 0 10px" key={uid + index}>
            <Row align="center" justify="flex-end" m="0 0 10px">
              <Avatar src={photoURL} alt="Avatar" style={{ borderRadius: "50%" }} />
              <h1>{displayName}</h1>
            </Row>
            <Heading>{text}</Heading>
          </Column>
        ))}
      </Card>
      <Row>
        <Input value={text} onChange={onChangeMessage} w="calc(100% - 120px)" />
        <Button h={50} onClick={sendMessage}>
          Send message
        </Button>
      </Row>
    </Fragment>
  );
};
