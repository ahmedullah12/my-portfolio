import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
