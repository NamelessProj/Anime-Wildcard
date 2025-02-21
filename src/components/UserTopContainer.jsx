import {useContext, useEffect, useState} from "react";
import DefaultSpinner from "./DefaultSpinner.jsx";
import {shuffleArray} from "../utils/shuffleArray.js";
import {Alert, Button} from "@material-tailwind/react";
import DataContext from "../context/DataContext.jsx";
import {Link} from "react-router-dom";
import TopCard from "./TopCard.jsx";
import AnimeCard from "./AnimeCard.jsx";

const UserTopContainer = ({data}) => {
    const {getAdult} = useContext(DataContext);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animeList, setAnimeList] = useState([]);
    const [topCardArray, setTopCardArray] = useState(Array(5).fill(null));
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [userError, setUserError] = useState("");

    const [animeCards, setAnimeCards] = useState([]);

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

    useEffect(() => {
        if(animeList.length > 0 && currentIndex < animeList.length){
            setAnimeCards([...animeCards, <AnimeCard key={animeList[currentIndex].media.id} anime={animeList[currentIndex].media} />]);
        }
    }, [currentIndex, animeList]);

    const handleTopCardArray = (index) => {
        setUserError("");

        if(topCardArray[index] !== null){
            setUserError("This place is already taken.");
            return;
        }

        setTopCardArray(topCardArray.map((anime, i) => i === index ? animeList[currentIndex] : anime));

        setCurrentIndex(currentIndex + 1);
    }

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
                            {userError && (
                                <div className="flex justify-center my-2">
                                    <Alert color="red" className="w-fit">
                                        {userError}
                                    </Alert>
                                </div>
                            )}

                            <div className="flex justify-center flex-wrap gap-5 my-12">
                                {topCardArray.map((_, index) => (
                                    <TopCard key={index} index={index} anime={topCardArray[index]} handler={() => handleTopCardArray(index)} />
                                ))}
                            </div>

                            <div className="relative isolate min-h-[500px]">
                                {animeCards}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default UserTopContainer;