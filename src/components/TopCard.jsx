import {Tooltip, Typography} from "@material-tailwind/react";

const TopCard = ({anime, handler}) => {
    return (
        <button onClick={handler} className="w-24">
            <div className="aspect-[9/16] h-40 rounded-md overflow-clip">
                <img src={anime ? anime.media.coverImage.large : './card_back.webp'} alt={anime ? anime.media.title.romaji : ''} />
            </div>
            {anime &&
                <Tooltip content={anime.media.title.english || anime.media.title.romaji}>
                    <Typography
                        className="text-nowrap whitespace-nowrap overflow-clip"
                        style={{textOverflow: "ellipsis"}}
                        as="a"
                        href={`https://anilist.co/anime/${anime.media.id}`}
                        target="_blank"
                    >
                        {anime.media.title.english || anime.media.title.romaji}
                    </Typography>
                </Tooltip>
            }
        </button>
    );
};

export default TopCard;