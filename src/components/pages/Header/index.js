import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Button } from "components/common/styled";
import { HeaderWrapper } from "components/pages/Header/styled";
import { FireBaseContext } from "index";

export const Header = () => {
  const { auth } = useContext(FireBaseContext);
  const [user] = useAuthState(auth);

  const logout = () => auth.signOut();

  return (
    <HeaderWrapper>
      <Button onClick={logout}>{user ? "Log Out" : "Log In"}</Button>
    </HeaderWrapper>
  );
};
