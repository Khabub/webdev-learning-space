import { Fragment } from "react";
import Pages from "./components/Layout/Pages";
import Main from "./components/Layout/Main";
import Navigation from "./components/Layout/Navigation";
import Articles from "./components/Layout/Articles";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Main />
      <Pages />
      <Articles />
    </Fragment>
  );
};

export default App;
