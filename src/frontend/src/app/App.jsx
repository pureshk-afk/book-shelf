import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { SignIn } from "../pages/SignIn";
import "../styles/base.css";

function App() {
  return (
    <Routes>
      <Route key={"homepage"} path={"/"} element={<Homepage />} />
      <Route key={"sign in"} path={"/signin"} element={<SignIn />} />
    </Routes>
  );
}

export default App;
