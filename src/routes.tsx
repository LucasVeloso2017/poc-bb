import { BrowserRouter, Routes, Route } from "react-router";
import { SignIn }  from "./pages/SignIn";
// import { Container } from './styles';

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;