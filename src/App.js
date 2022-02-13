import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Loading from "./Components/Loading/Index";
import Game from "./Pages/Game/Index";
import Home from "./Pages/Home/Index";
import { SET_ANSWER_FROM_STORAGE } from "./Store/ActionTypes";
import { getAppStore } from "./Store/Selectors";
import { urls } from "./Utils";

export const history = createBrowserHistory();

function App() {
  const { isLoading } = useSelector(getAppStore);
  const dispatch = useDispatch();
  useEffect(() => {
    const answers = localStorage.getItem('answers') || '{}';
   dispatch({ type: SET_ANSWER_FROM_STORAGE, payload: JSON.parse(answers), });
  }, []);
  
  return (
    <div className="App">
      {isLoading && <Loading />}
      <Router  history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={urls.game} element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
