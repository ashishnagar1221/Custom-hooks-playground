import { useEffect, useRef, useState } from "react";

const useThrottle = (value, limit = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRun = useRef(Date.now());

  useEffect(() => {
    if (Date.now() - lastRun.current >= limit) {
      setThrottledValue(value);
      lastRun.current = Date.now();
    }
  }, [value, limit]);

  return throttledValue;
};

export default useThrottle;
