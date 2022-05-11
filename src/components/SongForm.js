//import React, {useState} from "react"

const SongForm = (props) => {

  return (
    <form  className="song-form" onSubmit={props.handleSubmit}>
      <input
        className="song-input"
        type="text"
        id="title"
        placeholder="Title"
        name="title"
        value={props.title}
        onChange={props.handleChange}
      ></input>

      <input
        className="song-input"
        type="text"
        id="artist"
        placeholder="Artist"
        name="artist"
        value={props.artist}
        onChange={props.handleChange}
      ></input>

      <select
        className="song-input"
        id="genre"
        name="genre"
        value={props.genre}
        onChange={props.handleChange}
      >
        <option value="choose">choose a genre</option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Pop">Pop</option>
      </select>

      <select
        className="song-input"
        id="rating"
        name="rating"
        value={props.rating}
        onChange={props.handleChange}
      >
        <option value="rate">Rate the song</option>
        <option value="★☆☆☆☆">★☆☆☆☆</option>
        <option value="★★☆☆☆">★★☆☆☆</option>
        <option value="★★★☆☆">★★★☆☆</option>
        <option value="★★★★☆">★★★★☆</option>
        <option value="★★★★★">★★★★★</option>
      </select>

      <button className="song-input-add">Add Song</button>
    </form>
  );
};

export default SongForm;
