import React from "react";
import "./App.css";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Cards from "./component/Cards";
import img from "./images/me.jpg"

const proyect = [{name:'Tribute Page', src: '/images/tributePage.JPG', href:'https://lorenatorog11.github.io/TributePage/' }, {name:'Survey Form', src: '/images/surveyForm.JPG', href:'https://lorenatorog11.github.io/Surveyform/' }, {name:'Product Landing Page', src: '/images/productLandingPage.JPG', href:'https://lorenatorog11.github.io/productLandingPage/' }, {name:'Technical Page', src: '/images/TechnicalPage.JPG', href:'https://lorenatorog11.github.io/technicalDocumentationPage/' }, {name:'Random Quote Machine', src: '/images/randomQuoteMachine.JPG', href:'https://random-quote-machine1.herokuapp.com/' }, {name:'Markdown Previewer', src: '/images/markdownPreviewer.JPG', href:'https://markdown-previewer-1.herokuapp.com/'}, {name:'Drum Machine', src: '/images/drumMachine.JPG', href:'https://drum-machine-page.herokuapp.com/' }, {name:'Calculator', src: '/images/calculator.JPG', href:'https://app-calculator-application.herokuapp.com/' }, {name:'Pomodoro Clock', src: '/images/pomodoroClock.JPG', href:'https://pomodoro-clock-app.herokuapp.com/' }, {name:'Pokedex', src: '/images/pokedex.jpg', href:'http://pokedecks-app2.herokuapp.com/' },
{name:'TurApp', src: '/images/TurApp.JPG', href:'https://turapp.vercel.app/'}, {name:'Superheroes', src: '/images/Superheroes.JPG', href:'https://super-heroes-omega.vercel.app/' }];
console.log(proyect[0].src)
function App() {
  return (
    <div className="App">
      <section className='navBar p-0'>
        <Nav className='nav p-0 m-0'>
          <Nav.Link className='link text-light m-auto' href="#welcome-section">Acerca de<hr className='hr m-0'/></Nav.Link>
          <Nav.Link className='link text-light m-auto' href="#projects">Trabajo<hr className='hr m-0'/></Nav.Link>
          <Nav.Link className='link text-light m-auto' href="#profile-link">Contacto<hr className='hr m-0'/></Nav.Link>
        </Nav>
      </section>
      <section id="welcome-section">
          <Container id="div-welcome">
            <Row>
              <Col xs={12} md={6} className='img_me p-0 m-auto'><img id='img_me' src={img} alt="me" ></img></Col>
              <Col xs={12} md={6} className='p-0' >
                <p className='font-weight-bold font-italic m-0'>Lorena Toro Gallego</p>
                <p className='textwelcome'>Ingeniera Ambiental</p>
                <p className='textwelcome'>Desarrolladora Web Frontend</p>
                <p className='textwelcome font-weight-bold mt-3 mb-1'>¿Quién soy?</p>
                <p className='textwelcome text-justify'>Soy una mujer apasionada por el medio ambiente y la tecnología, en búsqueda constante de crecimiento personal y profesional y con la mejor actitud siempre para enfrentar nuevos retos. </p>
              </Col>
            </Row>
          </Container>        
      </section>
      <section id="projects">
          <section className='proyectoR pb-4 px-4 font-weight-bold text-light text-center'><p className='m-0'>Proyectos realizados</p></section>
          <Container>
            <Row className='d-flex justify-content-center p-4'>
              {proyect.map((element, index)=>{
                return (
                  <Col xs={10} md={6} lg={4} className='m-auto' key={index}><Cards name={element.name} src={element.src} href ={element.href}/></Col>
                );              
              })}  
            </Row>
          </Container>
        </section>
        <section  id="profile-link">
            <p id= "invitacion"><strong>¡Te invito a que trabajemos junt@s!</strong></p>
            <p id="frase"> “Llegar juntos es el principio; mantenerse juntos es el progreso; trabajar juntos es el éxito” Henry Ford.</p>            
            <hr id="hr"/>
            <div id="logos">
                <div className="div-logos"><a href="https://github.com/lorenatorog11" target='_black'><FontAwesomeIcon className='fab' size="lg" icon={faGithub}></FontAwesomeIcon></a></div>
                <div className="div-logos"><a href="https://www.linkedin.com/in/lorena-toro-gallego-06a2467b/" target='_black'><FontAwesomeIcon className='fab' size="lg" icon={faLinkedin}></FontAwesomeIcon></a></div>
                <div className="div-logos"><a href="https://twitter.com/LorenaToroGall1" target='_black'><FontAwesomeIcon className='fab' size="lg" icon={faTwitter}></FontAwesomeIcon></a></div>            
            </div>            
        </section>     
    </div>
  );
}

export default App;
