import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
        <div className="App relative grid grid-rows-app isolate">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;