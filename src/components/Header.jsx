import {Typography} from "@material-tailwind/react";
import {FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="p-3">
            <div className="flex justify-between items-center">
                <Typography variant="h2" as="p">
                    <Link to="/">
                        Your BLinded Anime Top
                    </Link>
                </Typography>

                <a target="_blank" href="https://github.com/NamelessProj/Anime-Wildcard">
                    <Typography className="sr-only">
                        View on GitHub
                    </Typography>
                    <FaGithub size={24} />
                </a>
            </div>
        </header>
    );
};

export default Header;