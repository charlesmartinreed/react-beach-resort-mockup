import React from "react";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

// DEFAULT PROPS
Hero.defaultProps = {
  hero: "defaultHero"
};

export default Hero;
