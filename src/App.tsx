import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/blog",
    element: <div>Hello world Blogger!</div>,
  },
]);
function App() {
  return <div>
   <RouterProvider router={router} />
   
  <Alert>
    Hello <h3>World</h3>
  </Alert></div> 

}

export default App;