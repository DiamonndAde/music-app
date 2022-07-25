import React from "react";

const LibrarySong = ({
  song,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return { ...s, active: true };
      }
      return { ...s, active: false };
    });
    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
