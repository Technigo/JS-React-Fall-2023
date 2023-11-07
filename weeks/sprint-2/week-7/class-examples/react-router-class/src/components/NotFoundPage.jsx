import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>
        Oh Uh, it seems that the page you are trying to access does not exist.
      </h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
