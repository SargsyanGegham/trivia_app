import styled, { createGlobalStyle } from 'styled-components';
import { MenuItem, Select } from "@mui/material";

const MySelect = styled(Select)`
  width: 320px;
  height: 56px;
  border-radius: 18px !important;
  background: #fff;
  padding: 13px 16px 13px 16px !important;
  
  .MuiOutlinedInput-notchedOutline,
  &:hover .MuiOutlinedInput-notchedOutline {
    border: 2px solid #E7EBF1 !important;
  }
  
  & > div[aria-expanded="true"] ~ .MuiOutlinedInput-notchedOutline {
    border: 2px solid #95B6A9 !important;
  }
`;

const Option = styled(MenuItem)`
  border-radius: 18px !important;
  font-style: normal;
  font-weight: 500 !important;
  font-size: 18px !important;
  line-height: 170%;
  color: #354153;

  &:hover {
    color: #3A7859;
  }
`;

const GlobalStyles = createGlobalStyle`
  .MuiPaper-elevation {
    width: 300px !important;
    height: 202px !important;
    left: 50% !important;
    transform: translate(-50%, 6px) !important;
    border-radius: 18px !important;
    padding: 10px 10px 20px !important;
  }
`;

export const S = { Select: MySelect, Option, GlobalStyles, };