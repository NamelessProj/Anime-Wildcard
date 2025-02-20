import {useContext, useEffect, useState} from "react";
import DefaultSpinner from "./DefaultSpinner.jsx";
import {shuffleArray} from "../utils/shuffleArray.js";
import {Alert, Button} from "@material-tailwind/react";
import DataContext from "../context/DataContext.jsx";
import {Link} from "react-router-dom";

const UserTopContainer = ({data}) => {
    const {getAdult} = useContext(DataContext);

    const [animeList, setAnimeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if(data && data.MediaListCollection && data.MediaListCollection.lists){
            const list = data.MediaListCollection.lists.flatMap(list => list.entries);

            const shuffledList = shuffleArray(getAdult ? list : list.filter(entry => !entry.media.isAdult));

            if(shuffledList.length < 5){
                setError("You need at least 5 anime in your list to generate a top.");
                setIsLoading(false);
                return;
            }

            setAnimeList(shuffledList.slice(0, 5));
            setIsLoading(false);
        }
    }, [data]);

    return (
        <>
            {isLoading ? (
                <div className="h-full flex justify-center items-center">
                    <DefaultSpinner />
                </div>
            ) : (
                <div>
                    <div className="flex justify-center my-2">
                        <Button
                            color="deep-orange"
                            variant="gradient"
                        >
                            <Link to="/">
                                Go Back
                            </Link>
                        </Button>
                    </div>
                    {error ? (
                        <div className="flex justify-center my-2">
                            <Alert color="red" className="w-fit">
                                {error}
                            </Alert>
                        </div>
                    ) : (
                        <div>
                            {animeList.map((anime) => (
                                <div key={anime.id}>
                                    <img src={anime.media.coverImage.large} alt={anime.media.title.romaji} />
                                    <h3>{anime.media.title.romaji}</h3>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default UserTopContainer;