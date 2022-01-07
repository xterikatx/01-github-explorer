import React from "react";

export function RepositoryItem({ repository }) {
  return (
    <div>
      <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href={repository.link}>Acessar repositório</a>
      </li>
    </div>
  );
}
