import {
  RESET_QUESTIONS,
  SET_ANSWER,
  SET_CATEGORI,
  SET_LOADING,
  SET_QUESTIONS,
  SET_QUESTION_TYPES,
  SET_ANSWER_FROM_STORAGE,
} from "../ActionTypes";

const initialState = {
  categories: [],
  questions: [],
  gameHistory: [],
  isLoading: false,
  currentCategori: '',
  answers: {},
};

export default function AppReducer(state =initialState, action = {}) {
  switch (action.type) {
    case SET_QUESTION_TYPES: return { ...state, categories: [...action.payload] };
    case SET_CATEGORI: return { ...state, currentCategori: action.category };
    case SET_QUESTIONS: return { ...state, questions: [...action.payload] };
    case SET_ANSWER: return ({ 
      ...state,
       answers: { 
        ...state.answers, 
        [action.payload.category]: { ...action.payload },
       } 
    });
    case SET_ANSWER_FROM_STORAGE: return ({ 
      ...state,
       answers: { 
        ...action.payload, 
       } 
    });
    case RESET_QUESTIONS: return { ...state, questions: [] };
    case SET_LOADING: return { ...state, isLoading: action.isLoading };
    default: return state;
  }
};