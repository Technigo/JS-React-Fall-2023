import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import routes from "./routes/routes";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {routes}
    </BrowserRouter>
  );
};
