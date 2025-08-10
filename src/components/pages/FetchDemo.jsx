import useFetch from "../../customhooks/useFetch";

const FetchDemo = () => {
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=5`
  );
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-3">useFetch — Data Fetching</h2>
      <p className="text-gray-600 mb-4">
        Shows a simple API call with loading / error handling.
      </p>

      <div className="bg-white p-4 rounded shadow">
        {loading && <p className="text-blue-600">Loading…</p>}
        {error && <p className="text-red-500">Error : {error.message}</p>}
        {data && (
          <ul className="space-y-2">
            {data.map((ele) => (
              <li key={ele.id} className="flex items-center justify-between">
                <div>
                  <strong>#{ele.id}</strong> {ele.title}
                </div>
                <div
                  className={`px-2 py-1 rounded ${
                    ele.completed ? "bg-green-100" : "bg-yellow-100"
                  }`}
                >
                  {ele.completed ? "Done" : "Pending"}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FetchDemo;
