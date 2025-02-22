import {Button, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <main className="flex justify-center items-center">
            <div className="flex flex-col items-center text-center">
                <Typography variant="lead">
                    Page not found.
                </Typography>
                <Typography variant="h1" color="deep-orange" className="text-9xl">
                    404
                </Typography>
                <Button color="deep-orange" variant="text">
                    <Link to="/">
                        Go Back to Home
                    </Link>
                </Button>
            </div>
        </main>
    );
};

export default ErrorPage;