import AuthForm from "./components/AuthForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import Protected from "./components/Protected";
import ErrorPage from "./components/ErrorPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthForm />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/main",
      element: <Protected component={MainPage} />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
