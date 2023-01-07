import { useQuery } from "@apollo/client";
import Cards from "./Cards";
import CardQuestion from "./component/CardQuestion/CardQuestion";

function App() {
  return (
    <div className="app">
      <Cards />
      <CardQuestion />
    </div>
  );
}

export default App;
