import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(  
    <Context>
      <App />
    </Context> 

)