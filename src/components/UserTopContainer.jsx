import {useEffect, useState} from "react";
import DefaultSpinner from "./DefaultSpinner.jsx";
import {shuffleArray} from "../utils/shuffleArray.js";

const UserTopContainer = ({data}) => {
    const [animeList, setAnimeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(data && data.MediaListCollection && data.MediaListCollection.lists){
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
    );
};

export default UserTopContainer;