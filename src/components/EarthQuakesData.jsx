import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
const moment = require("moment");

const EarthQuakesData = () => {
  const EarthQuakesListItems = data.data.features.map((item) => {
    const { title = "", mag = "", time = "" } = item.properties;
    return (
      <DataContainer key={item.id}>
        <LinkContainer>
          <Link to={"/Detail/" + item.id}>{title}</Link>
        </LinkContainer>
        <MagnituteContainer>{mag}</MagnituteContainer>
        <DetailContainer>
          {moment(time).format("MMM DD, YYYY, h:mm A")}
        </DetailContainer>
      </DataContainer>
    );
  });
  return <div>{EarthQuakesListItems}</div>;
};

const DetailContainer = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  width: 190px;
`;
const LinkContainer = styled.div`
  width: 300px;
`;
const MagnituteContainer = styled.div`
  width: 80px;
`;
const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;
`;

export default EarthQuakesData;
