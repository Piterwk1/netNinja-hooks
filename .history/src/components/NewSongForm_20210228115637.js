import React from 'react';

const NewSongForm = () => {
  const [title, setTitle] = useState('');
  return (
    <form>
      <label>Song name:</label>
      <input type="text" required onChange={(e) => setTitle()} />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
