import styled, { css } from 'styled-components';
import { Button } from '@mui/material';
import { switchProp } from 'styled-tools';

const MyButton = styled(Button)`
  width: 155px;
  height: 56px;
  color: #FFFFFF;
  font-weight: bold !important;
  border-radius: 18px !important;
  font-size: 18px !important;
  line-height: 22px !important;
  text-transform: capitalize !important;

  ${switchProp('type', {
    'answer': css`
      max-width: 290px !important;
      width: 100% !important;
      background: transparent !important;
      font-weight: 700 !important;
      border: 2px solid #95B6A9 !important;
      padding: 16px 20px 18px !important;
      transition: 1s !important;
      min-height: 56px;
      height: fit-content;
      
      &:hover {
        border-color: transparent !important;
        background: #95B6A9 !important;

      }
    `,
  })}
`;

export const S = { MyButton };