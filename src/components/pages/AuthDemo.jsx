import useAuth from "../../customhooks/useAuth";

const AuthDemo = () => {
  const { user, login, logout, isLoggedIn } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-3">useAuth — Authentication</h2>
      <p className="text-gray-600 mb-4">
        Demo login stored in localStorage and profile fetching.
      </p>
      <div className="bg-white p-4 rounded shadow flex flex-col gap-4">
        <div>
          Status:{" "}
          <strong className={isLoggedIn ? "text-green-600" : "text-red-600"}>
            {isLoggedIn ? "Logged in" : "Logged out"}
          </strong>
        </div>
        {user && (
          <div className="p-2 rounded bg-slate-50">
            Hello, <strong>{user.name}</strong> — role: {user.role}
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => login("Ashish")}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Login
          </button>
          <button
            onClick={() => logout()}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthDemo;
