import React, { useState } from 'react';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ]);
  return (
    <div className="song-list">
      <ul>
        <li>{song1}</li>
        <li>{song2}</li>
      </ul>
    </div>
  );
};

export default SongList;
