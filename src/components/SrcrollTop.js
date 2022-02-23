import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//useLocation detects where u are in your website ,as it works whenever the athname changes

const ScrollTop = () => {
  const { pathname } = useLocation();
  // this way also we can extract the pathname from uselocation
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
  //i want to use this effect whenver pathname changes thatis what we write as dependics in square bracket
};

export default ScrollTop;
