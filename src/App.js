import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const pushInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert('Ingrese valores');
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarCli={pushInput}>1</Boton>
          <Boton manejarCli={pushInput}>2</Boton>
          <Boton manejarCli={pushInput}>3</Boton>
          <Boton manejarCli={pushInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarCli={pushInput}>4</Boton>
          <Boton manejarCli={pushInput}>5</Boton>
          <Boton manejarCli={pushInput}>6</Boton>
          <Boton manejarCli={pushInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarCli={pushInput}>7</Boton>
          <Boton manejarCli={pushInput}>8</Boton>
          <Boton manejarCli={pushInput}>9</Boton>
          <Boton manejarCli={pushInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarCli = {calcularResultado}>=</Boton>
          <Boton manejarCli={pushInput}>0</Boton>
          <Boton manejarCli={pushInput}>.</Boton>
          <Boton manejarCli={pushInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={ () => setInput('') }>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
