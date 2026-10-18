import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
  const { directors } = useOutletContext();

  return (
    <div>
      <h2>All Directors</h2>

      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            <Link to={`/directors/${director.id}`}>
              {director.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/directors/new">Add New Director</Link>
    </div>
  );
};

export default DirectorList;

