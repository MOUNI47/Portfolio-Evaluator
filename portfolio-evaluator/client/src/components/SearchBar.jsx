import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(repoUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub repo URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button type="submit">Evaluate</button>
    </form>
  );
};

export default SearchBar;
