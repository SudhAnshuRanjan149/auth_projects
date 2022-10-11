import "./App.css";
import Router from "./Router/Router.js";
import axios from "axios";
import { AuthContextProvider } from "./Context/AuthContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <h1>Hello There</h1>

      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
