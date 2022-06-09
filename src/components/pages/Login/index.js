import { useContext } from "react";

import { Button, Card, Row } from "components/common/styled";
import { FireBaseContext } from "index";

export const Login = () => {
  const { auth, firebase } = useContext(FireBaseContext);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Card p="100px">
      <Row w="100%" justify="center">
        <Button w={300} h={50} onClick={login}>
          Login in via Google
        </Button>
      </Row>
    </Card>
  );
};
