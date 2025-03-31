import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DoublyLinkedListPage from "./DoublyLinkedListPage";
import logo from "./logo.svg";
import "./App.css";
import SongList from './SongList';
import NowPlaying from './NowPlaying';
import { useState } from "react";



function App() {

  const [currentSong, setCurrentSong] = useState(null);  // Canción actual
  const [currentIndex, setCurrentIndex] = useState(0);   // Índice actual
  const [songs, setSongs] = useState([]);  // Lista de canciones

  // Función para agregar una canción
  const addSong = (song) => {
    setSongs((prevSongs) => [...prevSongs, song]);
  };

  // Función para reproducir la siguiente canción
  const playNextSong = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Volver a la primera canción
    }
    setCurrentSong(songs[currentIndex]);
  };

  // Función para manejar la reproducción de una canción cuando se hace clic
  const playSong = (index) => {
    setCurrentIndex(index);
    setCurrentSong(songs[index]);
  };


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><Link to="/doubly-linked-list">Lista Doblemente Enlazada</Link></li>
            </ul>
          </nav>
        </header>

        <div>
          <h1>Reproductor de Canciones con Lista Enlazada</h1>
          
          {/* Mostrar la canción que se está reproduciendo */}
          <NowPlaying currentSong={currentSong} />

          {/* Agregar canciones */}
          <SongList addSong={addSong} />

          {/* Mostrar la lista de canciones */}
          <h3>Lista de Canciones:</h3>
          <ul>
            {songs.map((song, index) => (
              <li key={index} onClick={() => playSong(index)}>
                {song.title} de {song.artist}
              </li>
            ))}
          </ul>

          {/* Botón para reproducir la siguiente canción */}
          <button onClick={playNextSong} disabled={songs.length === 0}>
            Siguiente Canción
          </button>
        </div>

        <Routes>
          <Route path="/doubly-linked-list" element={<DoublyLinkedListPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;


