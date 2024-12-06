import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";
import "../index.css";

const Card = ({ char }) => {
  const { dispatch, state } = useCharStates();

  const findFav = state.favs.some((fav) => fav.id === char.id);
  console.log(findFav);
  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  };

  return (
    <div className="card">
      <Link to={`/detail/${char.id}`}>
        <h3>{char.name}</h3>
        <img src="./images/doctor.jpg" alt="" className="card-image"/>
      </Link>
      <br />
      <button onClick={toggleFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;