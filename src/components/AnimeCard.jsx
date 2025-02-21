import ReactCardFlip from "react-card-flip";
import {useState} from "react";
import {Button, Tooltip, Typography} from "@material-tailwind/react";
import {FaExternalLinkAlt} from "react-icons/fa";
import {TbRating18Plus} from "react-icons/tb";

const AnimeCard = ({anime}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    setTimeout(() => {
        setIsFlipped(true);
    }, 2200);

    const imgClassName = "w-full h-full object-cover";

    const cardClassName = "w-60 h-96 rounded-md overflow-clip"

    const style = {"--rotate-angle": `${Math.random() * 20 - 10}deg`};

    const handleClick = (e) => {
        e.preventDefault();
        window.open(`https://anilist.co/anime/${anime.id}`, "_blank");
    }


    const name = anime.title.english || anime.title.romaji;

    return (
        <div className="anime-card fixed left-1/2 bottom-[5%]" style={style}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack={0.3}>
                <div className={cardClassName}>
                    <img className={imgClassName} src="./card_back.webp" alt="" />
                </div>

                <Tooltip content={name}>
                    <div className={`${cardClassName} relative isolate`}>
                        <img className={`${imgClassName} absolute inset-0 z-0`} src={anime.coverImage.large} alt={name} />
                        <Button
                            color="deep-orange"
                            variant="text"
                            className="!absolute right-0 top-0 backdrop-blur-[2px]"
                            size="sm"
                            onClick={handleClick}
                        >
                            <FaExternalLinkAlt size={15} />
                        </Button>
                        {anime.isAdult &&
                            <div className="absolute left-0 top-0">
                                <TbRating18Plus size={36} color="red" />
                            </div>
                        }
                        <div className="absolute left-0 right-0 bottom-0 p-2 bg-gray-800 bg-opacity-70 backdrop-blur-sm z-10">
                            <Typography variant="lead" className="text-nowrap whitespace-nowrap overflow-clip" style={{textOverflow: "ellipsis"}}>
                                {name}
                            </Typography>
                        </div>
                    </div>
                </Tooltip>
            </ReactCardFlip>
        </div>
    );
};

export default AnimeCard;