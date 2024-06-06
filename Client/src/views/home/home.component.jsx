// import style from './home.module.css';
import { Link,  } from 'react-router-dom';
// import picture from "../../assets/homepic.jpg";
import logo from '../../assets/logo.png'
// import legaltech from "../../assets/legaltech.png";
import { Outlet } from 'react-router-dom';
import { useState } from 'react';



function Home() {
  
 
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  console.log("Rol usuario: ", user.rol);
  console.log('User local storage: ', user)

  const [selectedButton, setSelectedButton] = useState(user.matricula ? 'clientes' : 'datosPersonales');

  const handleButtonSelect = (buttonName) => {
    setSelectedButton(buttonName);
  };

  console.log("selectedButton", selectedButton)

  const handleSalir = () => {
    window.localStorage.setItem("loggedUser", JSON.stringify({}));
    setSelectedButton('');
    
  }

  return (
 
      <div className="bg-primary flex flex-col lg:flex-row justify-center items-center lg:w-1/4 h-screen">
        
      <div className="flex flex-col items-center w-1/4">
        <div className="flex items-center justify-center w-full p-4 mt-0">
          <img src={logo} alt="Logo" className="h-12 mr-3" />
          <span className="text-white text-xl font-bold">LegalTech</span>
        </div>
        <ul className="menu bg-primary text-white rounded-md menu-lg w-full h-full flex flex-col justify-around" style={{ height: "75vh", width: "35vh" }}>
          <li>
            {(user.administrador === true || user.cedulaAbogado) && (
              <Link to="/home/customers" className={`flex items-center justify-start text-white hover:text-white hover:bg-accent h-full w-full ${
                selectedButton === 'clientes' ? 'bg-accent' : ''
              }`}
              onClick={() => handleButtonSelect('clientes')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 20 20"><g fill="white" fillRule="evenodd" clipRule="evenodd"><path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path><path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.469 3.469 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0"></path><path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5"></path><path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path></g></svg>
                <button >Clientes</button>
              </Link>
            )}
          </li>
          <li>
            {user.administrador === true && (
              <Link to="/home/lawyers" className={`flex items-center justify-start text-white hover:text-white hover:bg-accent h-full w-full ${
                selectedButton === 'abogados' ? 'bg-accent' : ''
              }`}
              onClick={() => handleButtonSelect('abogados')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 20 20"><g fill="white" fillRule="evenodd" clipRule="evenodd"><path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path><path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.469 3.469 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0"></path><path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5"></path><path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path></g></svg>
                <button>Abogados</button>
              </Link>
            )}
          </li>
          <li>
            <Link to="/home/datos" className={`flex items-center justify-start text-white hover:text-white hover:bg-accent h-full w-full ${
                selectedButton === 'datosPersonales' ? 'bg-accent' : ''
              }`}
              onClick={() => handleButtonSelect('datosPersonales')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="white" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m3.05-5l-3.08-1.85L8.9 16l.81-3.5L7 10.16l3.58-.31l1.39-3.3l1.4 3.29l3.58.31l-2.72 2.35z"></path></svg>
              <button>Datos Personales</button>
            </Link>
          </li>
          <li>
            {/* {user.administrador === true || user.cedulaAbogado ? ( */}
            <Link to="/home/cases" className={`flex items-center justify-start text-white hover:text-white hover:bg-accent h-full w-full ${
                selectedButton === 'casos' ? 'bg-accent' : ''
              }`}
              onClick={() => handleButtonSelect('casos')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="white" d="m2.3 20.28l9.6-9.6l-1.4-1.42l-.72.71a.996.996 0 0 1-1.41 0l-.71-.71a.996.996 0 0 1 0-1.41l5.66-5.66a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.69l1.42 1.43a.996.996 0 0 1 1.41 0c.39.39.39 1.03 0 1.42l1.41 1.41l.71-.71c.39-.39 1.03-.39 1.42 0l.7.71c.39.39.39 1.03 0 1.42l-5.65 5.65c-.39.39-1.03.39-1.42 0l-.7-.7a.99.99 0 0 1 0-1.42l.7-.71l-1.41-1.41l-9.61 9.61a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.03 0-1.42M20 19a2 2 0 0 1 2 2v1H12v-1a2 2 0 0 1 2-2z"></path></svg>
              <button>Casos</button>
            </Link>
            {/* ) : undefined} */}
          </li>
          {/* <li> */}
            {/* <Link to="/home/documents" className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full">
              <button>Documentos</button>
            </Link> */}
          {/* </li> */}
          <li>
            <Link to="/home/diary" className={`flex items-center justify-start text-white hover:text-white hover:bg-accent h-full w-full ${
                selectedButton === 'agenda' ? 'bg-accent' : ''
              }`}
              onClick={() => handleButtonSelect('agenda')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="white" d="M5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0-2h14V5H5zm0 12q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-2h14v-4H5zM5 5v4zm0 10v4z"></path></svg>
              <button>Agenda</button>
            </Link>
          </li>
          <li>
            {(user.administrador === true || user.cedulaCliente) && (
              <Link to="/home/payments" className={`flex items-center justify-start text-white hover:text-white hover:bg-accent h-full w-full ${
                selectedButton === 'pagos' ? 'bg-accent' : ''
              }`}
              onClick={() => handleButtonSelect('pagos')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="white" d="M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5m1.5 9.93h-6.42a2 2 0 0 1 0-4h6.42Zm-6.42-5a3 3 0 0 0 0 6h6.42v2.44a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V6.565a1.5 1.5 0 0 1 1.5-1.5h14.87a1.5 1.5 0 0 1 1.5 1.5v2.43Z"></path><circle cx={14.519} cy={11.996} r={1} fill="white"></circle></svg>
                <button>Pagos</button>
              </Link>
            )}
          </li>
          <li>
            {user.administrador === true && (
              <Link to="/home/allconsultations" className={`flex items-center justify-start text-white hover:text-white hover:bg-accent h-full w-full ${
                selectedButton === 'consultas' ? 'bg-accent' : ''
              }`}
              onClick={() => handleButtonSelect('consultas')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="white" d="M12 7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m0 8q.425 0 .713-.288T13 14v-4q0-.425-.288-.712T12 9t-.712.288T11 10v4q0 .425.288.713T12 15m-6 3l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4z"></path></svg>
                <button className='focus:text-quaternary'>Consultas</button>
              </Link>
            )}
          </li>
          <li>
            <Link to="/" className="flex items-center justify-start text-white hover:text-white hover:bg-accent h-full w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><path fill="white" d="M14 6h-1.7c-.2 0-.4-.1-.6-.2l-1.3-1.3c-.2-.3-.6-.5-1.1-.5H9c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7l-.2.3h-2c-1.1 0-2.3.5-3 1.5l-.6.8c-.4.4-.2 1 .2 1.3c.4.2.9.1 1.2-.3l.5-.7c.3-.4.7-.6 1.2-.6h.8l-.7 1.6c-.3.6-.4 1.2-.4 1.9v2c0 .3-.2.5-.5.5H2c-.6 0-1 .4-1 1s.4 1 1 1h3.5c.8 0 1.5-.7 1.5-1.5V10l3.8 4.5c.6.9 1.7 1.5 2.8 1.5h.9L9.1 9.3c-.3-.4-.2-.8 0-1.3l.6-1.5l.7.8c.4.4 1 .7 1.6.7h2c.6 0 1-.4 1-1s-.4-1-1-1"></path></svg>
              <button onClick={handleSalir}>Salir</button>
            </Link>
          </li>
        </ul>
      </div>
      
    </div>

  );
}


export default Home
