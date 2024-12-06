import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";
import "../index.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    state: { chars },
  } = useCharStates();
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {chars.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </main>
  );
};

export default Home;
