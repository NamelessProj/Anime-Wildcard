import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="App grid-rows-app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;