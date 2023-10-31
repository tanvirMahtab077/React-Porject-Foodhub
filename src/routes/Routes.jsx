import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: (        
          <Home />
      ),
      children: [
      ]
    }
  ]);
  export default Routes