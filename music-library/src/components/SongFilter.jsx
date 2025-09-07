import { useState } from "react";
import { useMusic } from "../context/MusicContext";
import SongForm from "./SongForm";

const SongFilter = ({ user }) => {
  const {
    songs,
    setSearch,
    setFilterValue,
    setSortBy,
    setGroupBy,
    filterValue,
  } = useMusic();

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((prev) => !prev);

  return (
    <section className="p-6 bg-white border border-gray-300 rounded-md shadow my-8">
      <h3 className="text-xl font-semibold mb-4">Filters & Controls</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Search Songs</label>
          <input
            type="search"
            placeholder="Search by title, artist, or album..."
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Artist</label>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            onChange={(e) =>
              setFilterValue({ ...filterValue, artist: e.target.value })
            }
          >
            <option value="">All Artists</option>
            {Array.from(new Set(songs.map((s) => s.artist))).map((artist) => (
              <option key={artist} value={artist}>
                {artist}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Album</label>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            onChange={(e) =>
              setFilterValue({ ...filterValue, album: e.target.value })
            }
          >
            <option value="">All Albums</option>
            {Array.from(new Set(songs.map((s) => s.album))).map((album) => (
              <option key={album} value={album}>
                {album}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Genre</label>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            onChange={(e) =>
              setFilterValue({ ...filterValue, genre: e.target.value })
            }
          >
            <option value="">All Genres</option>
            {Array.from(new Set(songs.map((s) => s.genre))).map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Sort</label>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Title A–Z</option>
            <option value="desc">Title Z–A</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Group</label>{" "}
        <select
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setGroupBy(e.target.value)}
        >
          <option value="">No Grouping</option>{" "}
          <option value="artist">Group by Artist</option>{" "}
          <option value="album">Group by Album</option>{" "}
          <option value="genre">Group by Genre</option>{" "}
        </select>
      </div>
      {user.role === "admin" && (
        <button
          className="mt-5 bg-blue-400 text-white p-2 rounded"
          onClick={toggleModal}
        >
          + Add New Song
        </button>
      )}

      {modal && <SongForm toggleModal={toggleModal} />}
    </section>
  );
};

export default SongFilter;
