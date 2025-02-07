import { useState } from "react";

export default function Search({ onSearchChange, postLen }) {
  const [search, setSearch] = useState("");
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);

  const onSearchHandler = event => {
    // console.log('Search component : '+ event.target.value);
    setSearch(event.target.value);
    // onSearchChange(event.target.value);
    setIsSearchTriggered(false);

  }

  const onClickSearchHandler = () => {
    onSearchChange(search);
    setIsSearchTriggered(true);
  };

  const onKeySearchHandler = event => {
    if (event.key === "Enter") {
      onClickSearchHandler();
    }
  };

  return (
    <>
      <div>
        Cari Artikel : 
        <input 
          value={search}
          onKeyDown={onKeySearchHandler}
          onChange={onSearchHandler}
        />
        <button onClick={onClickSearchHandler}>Cari</button>
      </div>
      {isSearchTriggered && (
        <small>Ditemukan {postLen} data dengan pencarian kata '{search}'</small>
      )}
    </>
  )
}