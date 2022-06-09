import { Fragment } from "react";

import { Header } from "components/pages/Header";
import { AppRouter } from "components/router";
import { GlobalStyle } from "models/styles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <AppRouter />
    </Fragment>
  );
};

export default App;
