import React from 'react';

const NowPlaying = ({ currentSong }) => {
  return (
    <div>
      {currentSong ? (
        <div>
          <h2>Reproduciendo Ahora</h2>
          <p>
            <strong>{currentSong.title}</strong> de <em>{currentSong.artist}</em>
          </p>
        </div>
      ) : (
        <p>No hay canción en reproducción.</p>
      )}
    </div>
  );
};

export default NowPlaying;
