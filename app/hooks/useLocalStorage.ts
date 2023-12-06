import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [firstLoadDone, setFirstLoadDone] = useState(false);

  useEffect(() => {
    const fromLocal = () => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    };

    setStoredValue(fromLocal);
    setFirstLoadDone(true);
  }, [initialValue, key]);

  useEffect(() => {
    if (!firstLoadDone) {
      return;
    }

    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {}
  }, [storedValue, firstLoadDone, key]);

  return [storedValue, setStoredValue];
}
