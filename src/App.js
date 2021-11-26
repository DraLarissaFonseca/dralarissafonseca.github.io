import logo from './logo.svg';
import info from './assets/info.png';
import attendance from './assets/attendance.png';
import insta from './assets/insta.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <section className="top-section">
          <img src={logo} alt="logo" width="300" height="100" />
          <img src={info} alt="info" width="300" height="100" />
          <img src={attendance} alt="info" width="300" height="100" />
          <img src={insta} alt="info" width="300" height="100" />
        </section>
        <nav className="top-menu">
          <ul>
            <li>
              <a href="#top-menu">INICIO</a>
            </li>
            <li>
              <a href="#top-menu">ESPECIALIDADES</a>
            </li>
            <li>
              <a href="#top-menu">CONVÊNIOS</a>
            </li>
            <li>
              <a href="#top-menu">SOBRE NÓS</a>
            </li>
            <li>
              <a href="#top-menu">CONTATO</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
