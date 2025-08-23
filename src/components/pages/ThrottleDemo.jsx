import { useState, useEffect } from "react";
import useThrottle from "../../customhooks/useThrottle"; 

const ThrottleDemo = () => {
  const [value, setValue] = useState("");
  const throttled = useThrottle(value, 600); // throttling for 600ms

  useEffect(() => {
    if (throttled) console.log("ThrottleDemo: search", throttled);
  }, [throttled]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-3">
        useThrottle — Throttled input
      </h2>
      <p className="text-gray-600 mb-4">
        Type here and see throttled value updates (check console).
      </p>
      <div className="bg-white p-4 rounded shadow">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type to search..."
          className="w-full border p-2 rounded"
        />
        <div className="mt-2 text-sm text-gray-500">
          Throttled result: <strong>{throttled}</strong>
        </div>
      </div>
    </div>
  );
};

export default ThrottleDemo;
