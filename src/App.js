import "./App.css";
import {RouterProvider} from "react-router-dom";
import {router} from "./Layout/Route";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
