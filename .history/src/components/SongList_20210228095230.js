import React from 'react';

const SongList = () => {
  const [song1, setSong1] = useState('this wild darkness');
  const [song2, setSong2] = useState('memory gospel');

  return (
    <div className="song-list">
      <ul>
        <li>this wild darkness</li>
        <li>memory gospel</li>
      </ul>
    </div>
  );
};

export default SongList;
