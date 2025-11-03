import { Router, Routes, Route } from "react-router-dom";
import Step1 from "./pages/signup/step1";

function App() {
    return (
        <Routes>
            <Route path="step1" element={<Step1 />} />
        </Routes>
    )
}

export default App;