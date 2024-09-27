import { useEffect, useState } from "react";

function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        // Check if the event is for your specific key
        const updatedData = event.newValue ? JSON.parse(event.newValue) : [];
        setData(updatedData); // Update the local state
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  return [data, setData];
}

export default useLocalStorage;
