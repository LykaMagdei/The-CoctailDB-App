import { BrowserRouter } from "react-router-dom";
import MainCoctailsContainer from "../components/MainCoctails/MainCoctailsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <MainCoctailsContainer />
    </BrowserRouter>
  );
};

export default App;
