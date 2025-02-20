import {Alert, Button, Card, CardBody, Checkbox, Input} from "@material-tailwind/react";
import {useContext, useState} from "react";
import DataContext from "../context/DataContext.jsx";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const {username, getAdult, setUsername, setGetAdult} = useContext(DataContext);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if(!username || username === ""){
            setError("Please enter your Anilist username.");
            document.querySelector("input[name='username']").focus();
            return;
        }

        navigate("/top");
    }

    return (
        <main className="flex justify-center items-center">
            <Card className="w-[min(450px,100%)]">
                <CardBody>
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        {error && <Alert color="red">{error}</Alert>}
                        <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            label="Your Anilist username"
                            variant="standard"
                            color="deep-orange"
                            name="username"
                            autoFocus
                        />
                        <Checkbox
                            checked={getAdult}
                            onChange={(e) => setGetAdult(e.target.checked)}
                            color="deep-orange"
                            name="adult"
                            label="Include adult content"
                        />
                        <Button
                            color="deep-orange"
                            variant="gradient"
                            onClick={handleSubmit}
                        >
                            To the Blinded Top
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </main>
    );
};

export default Home;