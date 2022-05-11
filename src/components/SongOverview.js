import React, { useState} from "react"
import { nanoid } from 'nanoid'

import SongList from "./SongList.js";
import SongForm from "./SongForm.js";


const SongOverview = () => {

  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "my immortal",
      artist: "evenescence",
      genre: "rock",
      rating: "★★★★★",
    },
    {
      id: 2,
      title: "crawling",
      artist: "linkin park",
      genre: "rock",
      rating: "★★★★★",
    },
    {
      id: 3,
      title: "something just like this",
      artist: "the chainsmockers",
      genre: "pop",
      rating: "★★★★☆",
    },
  ])

 const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const handleChange = (event) =>{
    const {name, value} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]:value,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newSong ={
      id: nanoid(),
      title: formData.title,
      artist: formData.artist,
      genre: formData.genre,
      rating: formData.rating
    }
    const addSong = [...songs, newSong]
    setSongs(addSong)
  }

  return (
    <div>
      <SongForm songs={songs} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <table className="songs-table">
        <tbody>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
            <th></th>
          </tr>
          {songs.map ((song)=>(
            <SongList key={song.id} song={song} songs={songs} setSongs={setSongs}/>
          )) }
        </tbody>
        </table>      
    </div>
  );
};

export default SongOverview;