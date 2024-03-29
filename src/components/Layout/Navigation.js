import React, { useCallback, useEffect, useState } from "react";
import classes from "./Navigation.module.css";
import NavLogo from "../UI/NavLogo";
import NavIcon from "../UI/NavIcon";
import MenuStandard from "./MenuStandard";

const Navigation = (props) => {
  const [icon, setIcon] = useState("noshow");

  const handleWindowSize = useCallback(() => {
    window.innerWidth > 700 ? setIcon(false) : setIcon(true);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 700) {
      setIcon(false);
    } else {
      setIcon(true);
    }

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  return (
    <div className={classes.container}>
      <div className={classes.navlogo}>
        <NavLogo />
      </div>
      <div className={classes.navmenu}>
        {icon === "noshow" ? (
          ""
        ) : icon ? (
          <NavIcon onShow={props.onShow} />
        ) : (
          <MenuStandard />
        )}
      </div>
    </div>
  );
};

export default Navigation;
