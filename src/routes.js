import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login/index";

export default function Routes() {
   return(
        <Routes>
            <Route component = { Home }  path="/" exact />
            <Route component = { Login }  path="/login" />
        </Routes>

   )
}
