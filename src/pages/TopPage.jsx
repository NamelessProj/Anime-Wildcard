import {gql, useQuery} from "@apollo/client";
import {useContext, useEffect} from "react";
import DataContext from "../context/DataContext.jsx";
import DefaultSpinner from "../components/DefaultSpinner.jsx";
import {Alert} from "@material-tailwind/react";
import UserTopContainer from "../components/UserTopContainer.jsx";
import {useNavigate} from "react-router-dom";

const ANIME_QUERY = gql`
query ($username: String) {
  MediaListCollection (userName: $username, type: ANIME, status_not_in: [PAUSED, PLANNING, DROPPED]) {
    lists {
      entries {
        id,
        mediaId,
        media {
          id,
          isAdult,
          title {
            romaji,
            english
          },
          coverImage {
            extraLarge,
            large,
            medium,
            color
          },
          bannerImage
        }
      }
    }
  }
}`;

const TopPage = () => {
    const {username} = useContext(DataContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(!username || username === "") navigate("/");
    }, [username]);

    const {loading, error, data} = useQuery(ANIME_QUERY, {
        variables: {username}
    });

    return (
        <>
            {loading ? (
                <main className="flex justify-center items-center">
                    <DefaultSpinner />
                </main>
            ) : (
                <>
                    {error ? (
                        <main className="flex justify-center items-center">
                            <Alert color="red">
                                {error.message}
                            </Alert>
                        </main>
                    ) : (
                        <main>
                            <UserTopContainer data={data} />
                        </main>
                    )}
                </>
            )}
        </>
    );
};

export default TopPage;