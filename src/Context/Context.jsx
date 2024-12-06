import { createContext, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { reducer } from "../reducers/reducer";

const CharStates = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const savedTheme = localStorage.getItem("theme") || "light";

const initialState = {
  chars: [],
  favs: lsFavs,
  theme: savedTheme,
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      dispatch({ type: "GET_CHARS", payload: res.data });
      // setChars(res.data.results);
    });
  }, []);
  return (
    <CharStates.Provider value={{ state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => useContext(CharStates);