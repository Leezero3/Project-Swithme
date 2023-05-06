import { QueryClient, QueryClientProvider } from "react-query";
import Router from "shared/Router";

const queryclient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryclient}>
            <Router />
        </QueryClientProvider>
    );
}

export default App;
