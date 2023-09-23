import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold text-red-600">Oops!!</h2>
      <h1 className="text-6xl">404</h1>
      <p className="text-gray-400 font-bold">Page Not Found</p>
      <Link to={'/'}>
        <button className="btn mt-10 btn-warning">Go back to main page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
