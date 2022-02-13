import { CircularProgress } from "@mui/material";
import { S } from "./style";

export default function Loading() {
  return (
    <S.LoadingContainer>
      <CircularProgress />
    </S.LoadingContainer>
  );
};