import { Fragment, useState } from "react";
import Pages from "./components/Layout/Pages";
import Main from "./components/Layout/Main";
import Navigation from "./components/Layout/Navigation";
import Articles from "./components/Layout/Articles";
import MenuHam from "./components/Layout/MenuHam";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const hamMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <Fragment>
      {toggleMenu && <MenuHam onClose={closeMenu} />}
      <Navigation onShow={hamMenu} />
      <Main />
      
        <Pages />
      
      <Articles />
    </Fragment>
  );
};

export default App;
