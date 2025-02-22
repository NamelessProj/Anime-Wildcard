import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import TopPage from "./pages/TopPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="top" element={<TopPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

export default App;