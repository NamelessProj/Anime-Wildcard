import {Tooltip, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import ReactCardFlip from "react-card-flip";

const TopCard = ({index, anime, handler}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [name, setName] = useState(index + 1);

    useEffect(() => {
        if(anime){
            setIsFlipped(true);
            setName(anime.media.title.english || anime.media.title.romaji);
        }
    }, [anime]);

    const backCard = `./card_back_${index + 1}.jpg`;

    const imgProps = {
        className: "w-full h-full rounded-[5px] overflow-clip object-cover",
    };

    const typoProps = {
        className: "text-nowrap whitespace-nowrap overflow-clip",
        style: {textOverflow: "ellipsis"},
    }

    return (
        <Tooltip content={name}>
            <button onClick={handler} className="w-24">
                <div className="mb-2">
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName="w-24 h-36">
                        <img {...imgProps} src={backCard} alt="" />
                        <img {...imgProps} src={anime ? anime.media.coverImage.large : backCard} alt={name} />
                    </ReactCardFlip>
                </div>
                {typeof name === "string" ?
                    <Typography
                        {...typoProps}
                        as="a"
                        href={`https://anilist.co/anime/${anime.media.id}`}
                        target="_blank"
                    >
                        {name}
                    </Typography>
                    :
                    <Typography {...typoProps}>
                        {name}
                    </Typography>
                }
            </button>
        </Tooltip>
    );
};

export default TopCard;