import { createContext } from "react";
import { useState } from "react";

const DarkLightContext = createContext({
  setSun: () => {},
  sunResult: true,
});

export const DarkLightProvider = (props) => {
  const [sunToggle, setSunToggle] = useState(true);


  const sunHandler = () => {
    setSunToggle((prev) => !prev)
  };
  

  const darkLightContext = {
    setSun: sunHandler,
    sunResult: sunToggle
  };

  return (
    <DarkLightContext.Provider value={darkLightContext}>
      {props.children}
    </DarkLightContext.Provider>
  );
};

export default DarkLightContext;
