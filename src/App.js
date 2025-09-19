import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninViews from "./page/signin";
import SignupViews from "./page/signup";
import MainViews from "./page/main";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninViews />} />
        <Route path="/signin" element={<SigninViews />} />
        <Route path="/signup" element={<SignupViews />} />
        <Route path="/main" element={<MainViews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
