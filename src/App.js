import logo from "./brev.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This react app is ready to run!</p>
        <p>Hot reload for a deployed app.</p>
        <a
          className="App-link"
          href="https://brev.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          our site
        </a>
      </header>
    </div>
  );
}

export default App;
