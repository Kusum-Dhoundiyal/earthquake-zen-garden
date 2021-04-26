import React from "react";
import styled from "styled-components";
import data from "../data.json";
const { firstName, lastName, phone, email, bio, avatarImage } = data.profile;

const Profile = () => {
  return (
    <div>
      <HeadingContainer>Profile</HeadingContainer>
      <ProfileContainer>
        <div>
          <ImageContainer src={avatarImage}></ImageContainer>
        </div>
        <DataContainer>
          <div>
            <HeaderContainer>First Name</HeaderContainer>
            <HeaderContainer>Last Name</HeaderContainer>
            <HeaderContainer>Phone</HeaderContainer>
            <HeaderContainer>Email</HeaderContainer>
            <HeaderContainer>Bio</HeaderContainer>
          </div>
          <div>
            <DetailContainer>{firstName}</DetailContainer>
            <DetailContainer>{lastName}</DetailContainer>
            <DetailContainer>{phone}</DetailContainer>
            <DetailContainer>{email}</DetailContainer>
            <DetailContainer>{bio}</DetailContainer>
          </div>
        </DataContainer>
      </ProfileContainer>
    </div>
  );
};
export default Profile;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  color: #444444;
  font-weight: bold;
  font-size: 22px;
`;

const ImageContainer = styled.img`
  height: 100px;
`;

const ProfileContainer = styled.div`
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
