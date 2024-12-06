import { useCharStates } from "../Context/Context";

const ThemeToggleButton = () => {
  const { state, dispatch } = useCharStates();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <button onClick={toggleTheme}>
      {state.theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggleButton;