import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <section className="top-section">
          <img src={logo} alt="logo" width="300" height="100" />
        </section>
        <nav className="top-menu">
          <ul>
            <li>
              <a href="#top-menu">Home</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
