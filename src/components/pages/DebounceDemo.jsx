import { useEffect, useState } from "react";
import useDebounce from "../../customhooks/useDebounce";

const DebounceDemo = () => {
  const [value, setValue] = useState("");
  const debounced = useDebounce(value, 600);

    useEffect(() => {
    if (debounced) console.log('DebounceDemo: search', debounced);
  }, [debounced]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-3">
        useDebounce — Debounced input
      </h2>
      <p className="text-gray-600 mb-4">
        Type here and see the debounced value update (check console).
      </p>
      <div className="bg-white p-4 rounded shadow">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type to search..."
          className="w-full border p-2 rounded"
        />
        <div className="mt-2 text-sm text-gray-500">
          Debounced result: <strong>{debounced}</strong>
        </div>
      </div>
    </div>
  );
};

export default DebounceDemo;
