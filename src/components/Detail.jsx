import React from "react";
import styled from "styled-components";
import mockData from "../data.json";
import { useParams } from "react-router-dom";
const moment = require("moment");

const Detail = () => {
  let { id } = useParams();
  let details =
    id &&
    mockData.data.features.filter((item) => {
      return item.id === id;
    });
  const {
    title = "",
    mag = "",
    status = "",
    tsunami = "",
    type = "",
    time = "",
  } = details && details[0].properties;
  
  return (
    <div>
      <HeadingContainer>Detail</HeadingContainer>
      {details && (
        <DetailFragment>
          <DataContainer>
            <div>
              <HeaderContainer>Title</HeaderContainer>
              <HeaderContainer>Magnitute</HeaderContainer>
              <HeaderContainer>Time</HeaderContainer>
              <HeaderContainer>Status</HeaderContainer>
              <HeaderContainer>Tsuanmi</HeaderContainer>
              <HeaderContainer>Type</HeaderContainer>
            </div>
            <div>
              <DetailContainer>{title}</DetailContainer>
              <DetailContainer>{mag}</DetailContainer>
              <DetailContainer>
                {moment(time).format("MMM DD, YYYY, h:mm A")}
              </DetailContainer>
              <DetailContainer>{status}</DetailContainer>
              <DetailContainer>{tsunami}</DetailContainer>
              <DetailContainer>{type}</DetailContainer>
            </div>
          </DataContainer>
        </DetailFragment>
      )}
    </div>
  );
};

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  color: #444444;
  font-weight: bold;
  font-size: 22px;
`;

const DetailFragment = styled.div`
  display: flex;
  width: 400px;
  margin: auto;
`;

const DetailContainer = styled.div`
  font-family: sans-serif;
  font-weight: 500;
  color: #777777;
  margin-right: 10px;
  width: 300px;
`;

const DataContainer = styled.div`
  margin-left: 50px;
  display: flex;
`;

const HeaderContainer = styled.div`
  font-family: sans-serif;
  font-weight: 500;
  margin-right: 10px;
  width: 100px;
`;

export default Detail;
