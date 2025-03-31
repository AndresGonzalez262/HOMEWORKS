import React, { useState } from 'react';

const SongList = ({ addSong }) => {
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleAddSong = () => {
    if (songTitle && artist) {
      addSong({ title: songTitle, artist });
      setSongTitle('');
      setArtist('');
    }
  };

  return (
    <div>
      <h2>Agregar Nueva Canción</h2>
      <input
        type="text"
        placeholder="Título de la canción"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artista"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button onClick={handleAddSong}>Agregar Canción</button>
    </div>
  );
};

export default SongList;
