import { BrowserRouter, Routes, Route } from "react-router";
import { SignIn } from "./pages/SignIn";
import Main from "./pages/Main";
import PagesLayout from "./layout/PagesLayout";
import Fullscreen from "./pages/Fullscreen";

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route path="/"  index element={<SignIn />} />
      
      <Route element={<PagesLayout />}>
        <Route path="/main" element={<Main />} />
        <Route path="/fullscreen" element={<Fullscreen />} />
      </Route>

    </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;