import React from "react";
import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";
const WelcomeMessage = "Welcome";

const Header = () => {
  return (
    <HeaderStyle>
      <Link to={"/Home"}>
        <ImageContainer src={data.site.logoImage} />
      </Link>
      <div>{data.site.title}</div>
      <Link to={"/Profile"}>
        <div>
          {WelcomeMessage} {data.profile.firstName}
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
