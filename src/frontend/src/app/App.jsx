import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Register } from "../pages/Register";
import { SignIn } from "../pages/SignIn";
import "../styles/base.css";

function App() {
  return (
    <Routes>
      <Route key={"homepage"} path={"/"} element={<Homepage />} />
      <Route key={"sign in"} path={"/signin"} element={<SignIn />} />
      <Route key={"register"} path={"/registration"} element={<Register />} />
    </Routes>
  );
}

export default App;
