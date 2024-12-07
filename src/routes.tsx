import { BrowserRouter, Routes, Route } from "react-router";
import { SignIn }  from "./pages/SignIn";
import PagesLayout from "./layout/PagesLayout";
import Main from "./pages/Main";
import Fullscreen from "./pages/Fullscreen";
import LoginLayout from "./layout/LoginLayout";
import { StatisticalGraphs } from "./pages/StatisticalGraphs";
// import { Container } from './styles';

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route element={<LoginLayout/>}>
        <Route path="/" element={<SignIn />} />
      </Route>

      <Route element={<PagesLayout />}>
        <Route path="/main" element={<Main />} />
        <Route path="/fullscreen" element={<Fullscreen />} />
        <Route path="/statisticalgraphs" element={<StatisticalGraphs />} />
      </Route>
    </Routes>


   </BrowserRouter>
  );
}

export default AppRoutes;