import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useMusic } from "../context/MusicContext";

const SongForm = ({ toggleModal }) => {
  const { addSong } = useMusic();

  const [form, setForm] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
    duration: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    if (!form.title || !form.artist) return;
    addSong(form);
    setForm({
      title: "",
      artist: "",
      album: "",
      genre: "",
      year: "",
      duration: "",
    });
    toggleModal();
  };

  return (
    <>
      <section className="fixed inset-0 z-50 flex items-center justify-center text-black">
        <div
          onClick={toggleModal}
          className="absolute inset-0 bg-black/70"
        ></div>

        <form
          className="relative bg-white rounded shadow-lg max-w-3xl w-full mx-4 p-5 overflow-auto"
          onSubmit={handleSubmit}
        >
          <button
            type="button"
            onClick={toggleModal}
            className="absolute top-1 right-0 px-3 py-1"
          >
            <RxCross2 size={25} />
          </button>
          <h3 className="font-semibold text-xl mb-2">Add New Song</h3>
          <p>Fill in the details to add a new song to your library.</p>
          <div className="grid grid-col-1 md:grid-cols-2 gap-3 my-5">
            <div>
              <label>Title *</label>
              <input
                type="text"
                name="title"
                placeholder="Song title"
                value={form.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3"
              />
            </div>
            <div>
              <label>Artist *</label>
              <input
                type="text"
                name="artist"
                value={form.artist}
                placeholder="Artist name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3"
              />
            </div>
            <div>
              <label>Album *</label>
              <input
                type="text"
                name="album"
                value={form.album}
                placeholder="Album name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3"
              />
            </div>
            <div>
              <label>Genre *</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3"
                onChange={handleChange}
                name="genre"
                value={form.genre}
              >
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="hiphop">Hip Hop</option>
                <option value="jazz">Jazz</option>
                <option value="classical">Classical</option>
                <option value="blues">Blues</option>
                <option value="reggae">Reggae</option>
                <option value="country">Country</option>
                <option value="electronic">Electronic</option>
                <option value="indie">Indie</option>
              </select>
            </div>
            <div>
              <label>Duration (MM:SS)</label>
              <input
                type="text"
                name="duration"
                value={form.duration}
                placeholder="Duration"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3"
              />
            </div>

            <div>
              <label>Release Year</label>
              <input
                type="number"
                name="year"
                value={form.year}
                placeholder="Song title"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-col justify-end items-end">
            <div className="flex gap-5">
              <button
                onClick={toggleModal}
                className="py-2 px-4 border-1 border-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                className="py-2 px-4 text-white rounded bg-blue-400"
                type="submit"
                onClick={handleSubmit}
              >
                Add Song
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default SongForm;
