import logo from "./logo.svg";
import microacquire_logo from "./microacquire.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logos">

        <img src={logo} className="App-logo" alt="logo" />
        <img src={microacquire_logo} className="App-logo ma" alt="logo" />
        </div>
        <p>Dear acquirer, this app is now yours 🎉</p>
        <a
          className="App-link"
          href="https://brev.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          brev.dev
        </a>
      </header>
    </div>
  );
}

export default App;
