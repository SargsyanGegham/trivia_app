import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(0.6);
`;

export const S = { LoadingContainer, };