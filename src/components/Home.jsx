import React from "react";
import styled from "styled-components";
import data from "../data.json";
import EarthQuakesData from "./EarthQuakesData";

const Home = () => {
  return (
    <div>
      <SubHeading>{data.data.metadata.title}</SubHeading>
      <HeadingContainer>
        <TittleContainer>Title</TittleContainer>
        <MagnituteHeadingContainer>Magnitute</MagnituteHeadingContainer>
        <TimeContainer>Time</TimeContainer>
      </HeadingContainer>
      <EarthQuakesData />
    </div>
  );
};

export default Home;

const SubHeading = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  color: #444444;
  font-weight: bold;
`;

const TittleContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;

const TimeContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MagnituteHeadingContainer = styled.div`
  width: 80px;
`;
