import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
// import { Container } from './styles';

const AppRoutes = () => {
  return(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;