import BottomNavigation from "./src/navigations/navigation";
import { registerBackgroundTask } from "./src/backEnd/functions/backGroundFetch";

export default function App() {
  // useEffect(() => {
  //   registerBackgroundTask();
  // }, []);
  return <BottomNavigation />;
}
