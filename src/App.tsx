import "./styles/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import apolloClient from "./apollo-client";
import AppLayout from "./components/layout/AppLayout";
import SchedulesPage from "./pages/SchedulesPage";
import ScheduleCreatePage from "./pages/ScheduleCreatePage";
import ScheduleUpdatePage from "./pages/ScheduleUpdatePage";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<SchedulesPage />} />
              <Route path="/create" element={<ScheduleCreatePage />} />
              <Route path="/update/:id" element={<ScheduleUpdatePage />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
