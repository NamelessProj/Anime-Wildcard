import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import TopPage from "./pages/TopPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="top" element={<TopPage />} />
            </Route>
        </Routes>
    );
}

export default App;