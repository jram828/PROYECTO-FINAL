import React from "react";
import { useState, useEffect } from "react";
import Lawyers from "../../components/lawyers/lawyers.components";
import Costumers from "../../components/costumers/costumers.component";
import { postCaso } from "../../handlers/crearCaso";
import { getAbogados } from '../../handlers/todosAbogados';
import { getClientes } from '../../handlers/todosClientes';

function CrearCaso() {
  
    
      const [userDataRegistro, setUserDataRegistro] = useState({
        cedulaAbogado:'',
        cedulaCliente:'',
        fecha:'',
        fechaFin:'',
        descripcion:'',
        TipoDeCasoId:''
      });
      console.log(userDataRegistro)

     
      const [abogados, setAbogados] = useState([]);
    
      useEffect(() => {
        
        const obtenerAbogados = async () => {
          try {
            const listaAbogados = await getAbogados(); 
            setAbogados(listaAbogados);
           
          } catch (error) {
            console.error('Error al obtener los abogados:', error);
          }
        };
    
        obtenerAbogados();
      }, []);

      console.log('abogados', abogados)

      const [clientes, setClientes] = useState([]);

      useEffect(() => {
    
        const obtenerClientes = async () => {
          try {
            const listaClientes = await getClientes(); 
            setClientes(listaClientes);
          } catch (error) {
            console.error('Error al obtener los clientes:', error);
          }
        };
    
        obtenerClientes(); 
      }, []);
    
      const handleChangeRegistro = (e) => {
        const { name, value } = e.target;
        setUserDataRegistro(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      console.log(setUserDataRegistro)
    
      const submitHandlerRegistro = async (e) => {
        e.preventDefault();
        try {
          await postCaso(userDataRegistro);
        
          window.alert('Caso creado con éxito');
        } catch (error) {
        
          console.error('Error al crear el caso:', error.message);
          window.alert('No se pudo crear el caso');
        }
      };
     

    return (
        <div className="container">
      <h1 className="titulo">Crear caso</h1>
      <form onSubmit={submitHandlerRegistro} className="formulario">
        <div className="input-row">
          <div>
            <label className="label">Tipo de caso:</label>
            <input className="input" 
            name="TipoDeCasoId"
            id="TipoDeCasoId"
            value={userDataRegistro.TipoDeCasoId}
          onChange={handleChangeRegistro}></input>
          </div>
          <label className="label">Fecha:</label>
          <input className="input"
           name="fecha"
           id="fecha"
           value={userDataRegistro.fecha}
          onChange={handleChangeRegistro}/>
          <br />
          <label className="label">Fecha Final:</label>
          <input className="input" 
          name="fechaFin"
          id="fechaFin"
          value={userDataRegistro.fechaFin}
           onChange={handleChangeRegistro} />
        </div>
        <div className="input-row">
          <label className="label">Abogado:</label>
          <select 
          name="cedulaAbogado"
          id="cedulaAbogado"
          onChange={event =>handleChangeRegistro(event)} >
      <option value="">Abogados</option>
      {abogados.map(abogado => (
        <option key={abogado.cedulaAbogado} 
        value={abogado.cedulaAbogado}>
          {abogado.nombre} {abogado.apellido} {abogado.cedulaAbogado}
        </option>
      ))}
      
    </select>
          <label className="label">Cliente:</label>
          <select
           name="cedulaCliente"
           id="cedulaCliente"
           onChange={handleChangeRegistro}>
       <option value="">Clientes</option>
      {clientes.map(cliente => (
        <option key={cliente.cedulaCliente} 
        value={cliente.cedulaCliente}>
          {cliente.nombre} {cliente.apellido}
        </option>
      ))}
    </select>
        </div>
        <div className="input-row">
          <label className="label">Descripcion:</label>
          <textarea className="input"
         name="descripcion"
         id="descripcion"
         value={userDataRegistro.descripcion}
          onChange={handleChangeRegistro} ></textarea>
        </div>
        <div className="botones">
          <input type="submit" className="button" value="Guardar" />
        </div>
      </form>
    </div>
    )
}

export default CrearCaso