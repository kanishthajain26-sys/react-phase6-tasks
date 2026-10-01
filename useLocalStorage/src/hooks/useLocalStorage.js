import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue) {
      return JSON.parse(savedValue);
    }

    return initialValue;
  });

  function updateValue(newValue, saveToStorage = true) {
    setValue(newValue);

    if (saveToStorage) {
      localStorage.setItem(
        key,
        JSON.stringify(newValue)
      );
    } else {
      localStorage.removeItem(key);
    }
  }

  return [value, updateValue];
}

export default useLocalStorage;