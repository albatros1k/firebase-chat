import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { useRoutes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "routes";

import { FireBaseContext } from "index";
import { Content } from "components/common/styled";
import { Loader } from "components/common/loader";

export const AppRouter = () => {
  const { auth } = useContext(FireBaseContext);
  const [user, loading] = useAuthState(auth);
  const routes = useRoutes(user ? privateRoutes : publicRoutes);

  return <Content>{loading ? <Loader /> : routes}</Content>;
};
