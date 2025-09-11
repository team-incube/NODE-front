import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./app/signin/page";
import SignupPage from "./app/signup/page";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
