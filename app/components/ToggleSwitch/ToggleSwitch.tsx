import { Switch } from "@headlessui/react";
import { useColorMode } from "@/hooks/useColorMode";

export default function ToggleSwitch() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Switch
      checked={colorMode === "dark"}
      onChange={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
      className={`${
        colorMode === "dark" ? "bg-white" : "bg-lightGray"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          colorMode === "dark" ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-black transition`}
      />
    </Switch>
  );
}
