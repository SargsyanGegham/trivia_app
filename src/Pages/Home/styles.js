import styled from 'styled-components';
import { keyframes } from 'styled-components';

const HomeWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const HomeTitle = styled.h1`
  font-weight: bold;
  font-size: 50px;
  line-height: 150%;
  text-align: center;
  color: #3A7859;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 30px;
  line-height: 150%;
  text-align: center;
  color: #354153;
  margin: 146px 0 36px;
`;

const ButtonWrapper = styled.section`
  margin-top: 99px;
`;

const pulse = keyframes`
  0% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
  }
  
  100% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
`;

const MyResultsBtn = styled.div`
  position: fixed;
  bottom: 15vh;
  right: 0;
  width: 60px;
  height: 50px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background: brown;
  border: 2px solid red;
  transition: all .6s;
  transform-origin: left;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  overflow: hidden;
  white-space: nowrap;
  animation: 1s infinite ${pulse};
  cursor: pointer;
  
   &:hover {
     width: 160px;
     animation: none;
   }
`;

const TableContainer = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 90%;
 max-height: 90vh;
 overflow-y: auto;
 background-color: #fff;
`;


export const S = { HomeWrapper, HomeTitle, Label, ButtonWrapper, MyResultsBtn, TableContainer, };