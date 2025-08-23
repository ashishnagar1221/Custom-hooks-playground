import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnLine, setIsOnLine] = useState(navigator.onLine);
  return isOnLine;
};

export default useOnlineStatus