import React, { useState } from 'react';

const NewSongForm = () => {
  const [title, setTitle] = useState('');
  console.log(title);
  return (
    <form>
      <label>Song name:</label>
      <input type="text" required onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
