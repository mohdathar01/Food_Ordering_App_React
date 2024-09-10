import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //check online or offline
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);

      window.addEventListener("online", () => {
        setOnlineStatus(true);
      });
    });
  }, []);

  //return bool
  return onlineStatus;
};
export default useOnlineStatus;
