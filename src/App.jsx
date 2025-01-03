import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import InputParent from "./components/InputParent";
import Navbar from "./components/Navbar";
import { useReducer, useState } from "react";
import ShowDatabase from "./components/ShowDatabase";

function App() {
  const RedFn = (state, action) => {
    switch (action.type) {
      case "DELETE":
        return state.filter((item) => item.inputemail !== action.email);
        break;

      case "ADD":
        let newState = [action.data, ...state];
        return newState;

      default:
        return state;
    }
  };

  const [state, dispatchstate] = useReducer(RedFn, []);

  const [home, sethome] = useState("Home");

  return (
    <>
      <Navbar home={home} sethome={sethome}></Navbar>
      {home === "Home" && (
        <InputParent dispatchstate={dispatchstate}></InputParent>
      )}
      {home === "DataBase" && (
        <ShowDatabase
          state={state}
          dispatchstate={dispatchstate}
        ></ShowDatabase>
      )}
    </>
  );
}

export default App;
