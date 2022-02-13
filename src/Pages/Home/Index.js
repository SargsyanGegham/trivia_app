import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import ResultTable from "../../Components/ResultTable/ResultTable";
import Select from "../../Components/Select/Index";
import { getCategores, setCategori } from "../../Store/Actions";
import { getAppStore } from "../../Store/Selectors";
import { urls } from "../../Utils";
import { S } from "./styles";

const Home = () => {
  const [value, setValue] = useState(null);
  const [resultModalIsOpen, setResultModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { categories, answers } = useSelector(getAppStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategores);
    }
  }, []);

  const handleSelectCategori = ({ target: { value }}) => {
    setValue(value)
  };
  
  const handleSubmit = () => {
    navigate(urls.game);
    dispatch(setCategori(value));
  };

  return (
    <S.HomeWrapper>
      <S.HomeTitle>Trivia App</S.HomeTitle>
      <S.Label>Pick a Category</S.Label>
      <S.MyResultsBtn onClick={() => setResultModalIsOpen(true)}>My results</S.MyResultsBtn>
      <Select
        value={value || false}
        onChange={handleSelectCategori}
        renderOption={{label: 'name', key: 'id', value: 'name',}}
        options={categories}
        inputProps={{ 'aria-label': 'Without label' }}
        renderValue={(selected) => {
          if (!selected) {
            return <em>Category</em>;
          }
          return selected.name;
        }}
      />
      
      <S.ButtonWrapper>
        <Button onClick={handleSubmit}>Start</Button>
      </S.ButtonWrapper>
      <Modal
        open={resultModalIsOpen}
        onClose={() => setResultModalIsOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
      <S.TableContainer>
        <ResultTable rows={Object.values(answers)} />
      </S.TableContainer>
    </Modal>
    </S.HomeWrapper>
  );
};
export default Home;