import { createContext, useContext, useState, useMemo } from "react";
import { songsData as initialSongs } from "../data/songsData";

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const [songs, setSongs] = useState(initialSongs);

  const [search, setSearch] = useState("");
  const [filterValue, setFilterValue] = useState({});
  const [sortBy, setSortBy] = useState("");
  const [groupBy, setGroupBy] = useState("");

  const addSong = (song) => {
    setSongs((prev) => [...prev, { ...song, id: prev.length + 1 }]);
  };

  const deleteSong = (id) => {
    setSongs((prev) => prev.filter((s) => s.id !== id));
  };

  const filteredSongs = useMemo(() => {
    return songs
      .filter((song) => {
        const matchesSearch =
          !search ||
          song.title.toLowerCase().includes(search.toLowerCase()) ||
          song.artist.toLowerCase().includes(search.toLowerCase()) ||
          song.album.toLowerCase().includes(search.toLowerCase());

        const matchesArtist =
          !filterValue.artist ||
          song.artist.toLowerCase() === filterValue.artist.toLowerCase();

        const matchesAlbum =
          !filterValue.album ||
          song.album.toLowerCase() === filterValue.album.toLowerCase();

        const matchesGenre =
          !filterValue.genre ||
          song.genre.toLowerCase() === filterValue.genre.toLowerCase();

        return matchesSearch && matchesArtist && matchesAlbum && matchesGenre;
      })
      .sort((a, b) => {
        if (sortBy === "newest") return b.year - a.year;
        if (sortBy === "oldest") return a.year - b.year;
        if (sortBy === "asc") return a.title.localeCompare(b.title);
        if (sortBy === "desc") return b.title.localeCompare(a.title);
        return 0;
      });
  }, [songs, search, filterValue, sortBy]);

  const groupedSongs = useMemo(() => {
    if (!groupBy) return { All: filteredSongs };

    return filteredSongs.reduce((groups, song) => {
      const key = song[groupBy] || "Others";
      if (!groups[key]) groups[key] = [];
      groups[key].push(song);
      return groups;
    }, {});
  }, [filteredSongs, groupBy]);

  return (
    <MusicContext.Provider
      value={{
        songs: filteredSongs,
        groupedSongs,
        addSong,
        deleteSong,
        setSearch,
        setFilterValue,
        setSortBy,
        setGroupBy,
        search,
        filterValue,
        sortBy,
        groupBy,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
