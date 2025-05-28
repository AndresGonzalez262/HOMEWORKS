import React, { useRef, useState } from 'react';
import './App.css';
import { BinaryTree } from './Tree';
import { ArbolBinario } from './BinaryTree';

function App() {
  const arbolRef = useRef(new ArbolBinario());
  const [valor, setValor] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [recorridos, setRecorridos] = useState({ pre: [], in: [], post: [] });
  const [encontrado, setEncontrado] = useState(null);

  const actualizarRecorridos = () => {
    setRecorridos({
      pre: [...arbolRef.current.preorden()],
      in: [...arbolRef.current.inorden()],
      post: [...arbolRef.current.postorden()]
    });
  };

  const manejarInsercion = () => {
    const num = Number(valor);
    if (!isNaN(num)) {
      arbolRef.current.insertar(num);
      actualizarRecorridos();
      setValor('');
    }
  };

  const manejarBusqueda = () => {
    const num = Number(busqueda);
    setEncontrado(arbolRef.current.contiene(num));
    setBusqueda('');
  };

  return (
  <div className="container">
    <div className="input-group">
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Ingresa un número"
      />
      <button onClick={manejarInsercion}>Insertar</button>
    </div>

    <div className="input-group">
      <input
        type="number"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar número"
      />
      <button onClick={manejarBusqueda}>Buscar</button>
      {encontrado !== null && (
        <p className={`feedback ${encontrado ? 'success' : 'error'}`}>
          {encontrado ? "¡Valor encontrado!" : "Valor no existe"}
        </p>
      )}
    </div>

    <div className="recorridos">
      <h3>Recorridos:</h3>
      <p><strong>Preorden:</strong> {recorridos.pre.join(', ') || 'Vacío'}</p>
      <p><strong>Inorden:</strong> {recorridos.in.join(', ') || 'Vacío'}</p>
      <p><strong>Postorden:</strong> {recorridos.post.join(', ') || 'Vacío'}</p>
    </div>

    <h3>Visualización del Árbol:</h3>
    <div className="visualizacion-arbol">
      <BinaryTree arbol={arbolRef.current} />
    </div>
  </div>
);
 
}

export default App;