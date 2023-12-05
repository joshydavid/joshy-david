import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      className={`${
        darkMode ? "bg-white" : "bg-lightGray"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          darkMode ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-black transition`}
      />
    </Switch>
  );
}
