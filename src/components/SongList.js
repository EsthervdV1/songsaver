import React from "react";

const SongList = ({song, songs, setSongs}) => {

  const handleDelete = () => {
    setSongs(songs.filter(el => el.id !== song.id))
  }

  return (
    <tr>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.genre}</td>
      <td>{song.rating}</td>
      <td>
        <button className="deleteButton" onClick={handleDelete}>delete</button>
      </td>
    </tr>
  );
};

export default SongList