import {Routes, Route} from "react-router-dom"; 
import Inquiry from "./pages/inquiry/index.jsx";
import Change from "./pages/change/index.jsx";
import MainPage from "./pages/mainPage/index.jsx";

function App() {
    return (
        <Routes>
            <Route path="/Inquiry" element={<Inquiry />} />
            <Route path="/Change" element={<Change />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
    )
}

export default App;
