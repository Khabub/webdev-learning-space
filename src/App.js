import { useState } from "react";
import Pages from "./components/Layout/Pages";
import Main from "./components/Layout/Main";
import Navigation from "./components/Layout/Navigation";
import Articles from "./components/Layout/Articles";
import MenuHam from "./components/Layout/MenuHam";
import { DarkLightProvider } from "./store-context";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const hamMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <DarkLightProvider>
      {toggleMenu && <MenuHam onClose={closeMenu} />}
      <Navigation onShow={hamMenu} />
      <Main />
      <Pages />
      <Articles />
    </DarkLightProvider>
  );
};

export default App;
