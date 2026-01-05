import { Routes, Route } from "react-router-dom";
import Step2 from "./pages/signup/step2";
import Step1 from "./pages/signup/step1";
import Step3 from "./pages/signup/step3";
import Step4 from "./pages/signup/step4";

function App() {
  return (
    <Routes>
      <Route path="/signup-step1" element={<Step1 />} />
      <Route path="/signup-step2" element={<Step2 />} />
      <Route path="/signup-step3" element={<Step3 />} />
      <Route path="/signup-step4" element={<Step4 />} />
    </Routes>
  );
}

export default App;
