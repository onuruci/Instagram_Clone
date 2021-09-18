import { styled } from '@material-ui/core';
import Styled from 'styled-components';


export const PopUpOverlay = Styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 500ms;
  z-index:3;
`;

export const PopUp = Styled.div`
  margin: 140px auto;
  background: #fff;
  border-radius: 5px;
  width: 20%;
  height: 35%;
  position: relative;
  transition: all 5s ease-in-out;
`;

export const PopHeader = Styled.div`
padding: 3px 3px;
  margin: 0 auto;
  width: 100%;
  height: 10%;
  font-weight: 200;
  font-size: 15px
  font-family: Roboto;
  text-align: center;
  position: relative;
`;

export const PopUpCloseButton = Styled.div`
  width: 20%;
  height: 8%;
  margin: 8px 0 auto auto;
  background: #fff;
  text-align: center;
  cursor: pointer;
  color: rgb(230,32,32);
  border: 2px solid rgb(230,32,32);
  @media only screen and (max-width: 900px) {
    padding: 3px 0;
    font-size: 8px;
  }
`;

export const HorizontalDivider = Styled.hr`
  border: 0.5px solid lightgrey;
  margin: 0;
  color: grey;
`;

export const LikesText = Styled.h4`
  margin: 8px auto auto auto;
  position: relative;
`;

export const PopBody = Styled.div`  
    width: 100%;
    overflow-y: scroll;
    height: 85%;
    position: relative;
`;

export const LikeView = Styled.div`
  width: 100%;
  height: 45px;
  margin: 0 auto;
`;