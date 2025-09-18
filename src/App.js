import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./app/signin/page";
import SignupPage from "./app/signup/page";
import MainPage from "./app/main/page";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
