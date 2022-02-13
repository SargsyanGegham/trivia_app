import { getQuestions } from "../../Services/apiService";
import { AppService } from "../../Services/Index";
import { SET_ANSWER, SET_CATEGORI, SET_LOADING, SET_QUESTIONS, SET_QUESTION_TYPES } from "../ActionTypes";

export const getCategores = async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, isLoading: true });
    const { data: { trivia_categories }} = await AppService.getCategores();
    dispatch({
      type: SET_QUESTION_TYPES,
      payload: trivia_categories,
    });
  } catch(e) {
    console.error(e);
  } finally {
    dispatch({ type: SET_LOADING, isLoading: false });
  }
};

export const setCategori =  category => async dispatch => {
  try {
    dispatch({ type: SET_LOADING, isLoading: true });
    dispatch({ type: SET_CATEGORI, category: category });
    const { data: { results } } = await getQuestions(category.id);
    dispatch({ type: SET_QUESTIONS, payload: results });
  } catch(e) {
    console.error(e);
  } finally {
    dispatch({ type: SET_LOADING, isLoading: false });
  }
};

export const setAnswer = payload => dispatch => {
  const answers = localStorage.getItem('answers') || '{}';
  localStorage.setItem('answers', JSON.stringify( { ...JSON.parse(answers), [payload.category]: payload}));
  dispatch({ type: SET_ANSWER, payload, });
};
