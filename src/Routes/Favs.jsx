import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {
    state: { favs },
  } = useCharStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </>
  );
};

export default Favs;
