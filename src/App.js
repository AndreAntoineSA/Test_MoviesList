import "./App.css";
import Main from "./Main";
import CardList from "../src/components/CardList";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Main>
        <CardList></CardList>
      </Main>
    </div>
  );
}

export default App;
