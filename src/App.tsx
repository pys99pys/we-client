import "./styles/app.css";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import apolloClient from "./apollo-client";
import AppLayout from "./components/layout/AppLayout";
import SchedulesPage from "./pages/SchedulesPage";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <AppLayout>
          <SchedulesPage />
        </AppLayout>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
