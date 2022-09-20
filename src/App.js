import logo from "./logo.svg";
import "./App.css";
import Parent from "./Components/Parent";
import AppContext from "./Context/AppContext";

function App() {
  return (
    <AppContext>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Parent />
          </p>
        </header>
      </div>
    </AppContext>
  );
}

export default App;
