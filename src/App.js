import logo from './logo.svg';
import info from './assets/info.png';
import attendance from './assets/attendance.png';
import insta from './assets/insta.png';

import pic1 from './assets/pic1.jpeg';
import pic2 from './assets/pic2.jpeg';
import pic3 from './assets/pic3.jpeg';

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
          <div className="top-menu-div">
          <ul>
            <li>
              <a href="#top-menu">INICIO</a>
            </li>
            <li>
              <a href="#especialidades">ESPECIALIDADES</a>
            </li>
            <li>
              <a href="#quem-sou">QUEM SOU</a>
            </li>
            <li>
              <a href="#contato">CONTATO</a>
            </li>
          </ul>
          </div>
        </nav>
      </header>
      <div className="front-pics">
        <img src={pic1} alt="pic1" width="450" height="300" />
        <img src={pic2} alt="pic2" width="450" height="300" />
        <img src={pic3} alt="pic3" width="450" height="300" />
      </div>
      <div className="pics-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" className="border-bottom-svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"/>
          <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"/>
          <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"/>	
        </svg>
      </div> 
      <div className="description-div" id="quem-sou">
        <img src={pic1} width="350" height="250" alt="quem-sou" />
        <div>
          <p>
            Somos uma clínica multidisciplinar localizada no bairro de São Francisco, em Niterói. Desde 2007, zelamos pelo bem-estar e satisfação de nossos pacientes e clientes de todas as idades.
            Contamos com uma equipe de Fisioterapeutas, Médicos, Traumato-ortopedistas, Educadores Físicos, Nutricionista e Psicólogos.
            Oferecemos aulas de Pilates, Atividades Aquáticas com piscina coberta e aquecida, Academia de Musculação e Terapias Alternativas.
            Nossa missão é proporcionar saúde, bem-estar e qualidade de vida aos nossos clientes com excelência em todos os atendimentos.
          </p>
        </div>
      </div>
      <div id="especialidades">
        <div className="especialties-list">
          <h2>Especialidades</h2>
          <ul>
            <li>Fisioterapia</li>
            <li>Pilates</li>
            <li>RPG</li>
          </ul>
        </div>
      </div>
      <div id="contato">
        <h2>Onde nos encontrar</h2>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe title="maps" width="600" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=condominio%20sonho%20de%20vida%20araruama&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
            <a href="https://www.embedgooglemap.net">google maps iframe code</a>
          </div>
        </div>
        <div className="contacts">
          <h2>Contatos</h2>
          <p>Telefone: (21) 981008743</p>
          <p>Whatsapp: (21) 981008743</p>
          <p>E-mail: larissatf@yahoo.com.br</p>
        </div>

      </div>
    </div>
  );
}

export default App;
