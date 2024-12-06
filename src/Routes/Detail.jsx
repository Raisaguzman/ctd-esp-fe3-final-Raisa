import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  console.log(params);
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setChar(res.data);
    });
  }, []);

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className="detail">
      <h1>{char.name} </h1>      
      <p>e-mail: {char.email}</p>
      <p>phone: {char.phone}</p>
      <p>website: <a>{char.website}</a></p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail;