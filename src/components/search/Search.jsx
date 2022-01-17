import React from "react";
import music from "./searchList";
import Fuse from "fuse.js";

const Search = () => {
  const [result, setResult] = React.useState("");

  function handleInput(input) {
    if (input.length >= 3) {
      const options = { keys: ["artist", "albums"] };
      const pattern = input;
      const fuse = new Fuse(music, options);

      setResult(fuse.search(pattern));
    }
  }

  return (
    <div className="search">
      <div className="search-header">Music Album Search</div>
      <div className="search-content">
        <form>
          <input
            placeholder="Search my favourite albums"
            onChange={(e) => handleInput(e.target.value)}></input>
        </form>
        {result && (
          <>
            <h3>Artists</h3>
            <ul>
              {result.map((artist, index) => {
                return (
                  <li className="list-item" key={`key-${index}`}>
                    {artist.item.artist}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {result && (
          <>
            <h3>Albums</h3>
            <ul>
              {result.map((album, index) => {
                let currentAlbumsString = album.item.albums.join(", ");
                return (
                  <li className="list-item" key={`key-${index}`}>
                    {currentAlbumsString}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
