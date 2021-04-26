import React from "react";
import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";
const WelcomeMessage = "Welcome";
const { logoImage, title } = data.site;
const { firstName } = data.profile;
const Header = () => {
  return (
    <HeaderStyle>
      <Link to={"/Home"}>
        <ImageContainer src={logoImage} />
      </Link>
      <div>{title}</div>
      <Link to={"/Profile"}>
        <div>
          {WelcomeMessage} {firstName}
        </div>
      </Link>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: grey;
`;
const ImageContainer = styled.img`
  height: 40px;
`;
export default Header;
