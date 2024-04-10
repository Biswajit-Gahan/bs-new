import React, { useEffect, useRef } from 'react';
import { TopNavigatorContainer } from './top.navigator.style';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const TopNavigator = () => {
  const topNav = useRef();

  const handleButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => { 
    const show = () => {
      if (window.scrollY <= 200) {
        topNav.current.style.right = "-100px";
        topNav.current.style.opacity = "0";
      } else {
        topNav.current.style.right = "20px";
        topNav.current.style.opacity = "1";
      };
    };

    window.addEventListener("scroll", show);

    return () => {
      window.removeEventListener("scroll", show);
    }
  }, []);

  return (
    <TopNavigatorContainer ref={topNav} onClick={handleButton} ><ArrowUpwardRoundedIcon /></TopNavigatorContainer>
  );
};

export default TopNavigator;