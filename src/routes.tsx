import { BrowserRouter, Routes, Route } from "react-router";
import { SignIn } from "./pages/SignIn";
import Main from "./pages/Main";
import PagesLayout from "./layout/PagesLayout";
import Fullscreen from "./pages/Fullscreen";
import LoginLayout from "./layout/LoginLayout";

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route element={<LoginLayout />}>
        <Route path="/"  index element={<SignIn />} />
      </Route>
      
      <Route element={<PagesLayout />}>
        <Route path="/main" element={<Main />} />
        <Route path="/fullscreen" element={<Fullscreen />} />
      </Route>

    </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;