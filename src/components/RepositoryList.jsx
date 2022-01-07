import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const repository = {
    name: "unform",
    description: "unform repository",
    link: "https://github.com/unform/unform",
  };
  return (
    <section className="respository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
