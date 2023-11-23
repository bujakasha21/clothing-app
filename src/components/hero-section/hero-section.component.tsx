import React from "react";

import {
  HeroBackgroundImage,
  HeadingTitle,
  LinkButton,
} from "./hero-section.styles";

const HeroSection = () => {
  return (
    <HeroBackgroundImage>
      <HeadingTitle>Welcome to our page!</HeadingTitle>
      <LinkButton to="/shop">Shop Now!</LinkButton>
    </HeroBackgroundImage>
  );
};

export default HeroSection;
