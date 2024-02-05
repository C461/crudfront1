import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10">
      <Link
        to={isAuthenticated ? "/tasks" : "/"}
        className="text-2xl font-bold hover:text-indigo-500"
      >
        Task Manager
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/tasks" className="hover:text-indigo-500 font-bold">
                Welcome {user.username}
              </Link>
            </li>
            <li>
              <Link to="/add-task" className="hover:text-indigo-500">
                Add Task
              </Link>
            </li>
            <li>
              <Link
                className="bg-indigo-500 hover:bg-indigo-400 px-4 py-1 rounded-sm"
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
