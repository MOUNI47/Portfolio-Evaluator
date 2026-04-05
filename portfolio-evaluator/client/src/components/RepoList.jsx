import React from "react";

const RepoList = ({ repos }) => {
  if (!repos || repos.length === 0) {
    return <p>No repositories found.</p>;
  }

  return (
    <div className="repo-list">
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>
            <strong>{repo.name}</strong> — {repo.description || "No description"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
