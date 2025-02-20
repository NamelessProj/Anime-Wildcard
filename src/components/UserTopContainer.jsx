import {useEffect, useState} from "react";
import DefaultSpinner from "./DefaultSpinner.jsx";
import {shuffleArray} from "../utils/shuffleArray.js";
import {Alert} from "@material-tailwind/react";

const UserTopContainer = ({data}) => {
    const [animeList, setAnimeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if(data && data.MediaListCollection && data.MediaListCollection.lists){
            if(data.MediaListCollection.lists.length < 5){
                setError("You need to have at least 5 anime in your list.");
                setIsLoading(false);
                return;
            }

            const list = data.MediaListCollection.lists.flatMap(list => list.entries);
            const shuffledList = shuffleArray(list);

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
                <>
                    {error ? (
                        <div className="h-full flex justify-center items-center">
                            <Alert color="red">
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
                </>
            )}
        </>
    );
};

export default UserTopContainer;