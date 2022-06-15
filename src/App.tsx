import "./styles/app.css";
import { RecoilRoot } from "recoil";
import AppLayout from "./components/layout/AppLayout";
import SchedulesPage from "./pages/SchedulesPage";

function App() {
  return (
    <RecoilRoot>
      <AppLayout>
        <SchedulesPage />
      </AppLayout>
    </RecoilRoot>
  );
}

export default App;
