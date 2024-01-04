import BottomNavigation from "./src/navigations/navigation";
import { registerBackgroundTask } from "./src/backEnd/functions/backGroundFetch";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    registerBackgroundTask();
  }, []);
  return <BottomNavigation />;
}
