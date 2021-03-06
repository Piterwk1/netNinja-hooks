import React, { useState } from 'react';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: 'new song', id: 4 }]);
    // console.log('click');
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add song</button>
    </div>
  );
};

export default SongList;
