import {Routes, Route} from "react-router-dom"; 
import Inquiry from "./pages/inquiry/index.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Inquiry />} />
        </Routes>
    )
}

export default App;
