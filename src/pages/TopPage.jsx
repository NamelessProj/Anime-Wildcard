import {gql, useQuery} from "@apollo/client";
import {useContext, useEffect} from "react";
import DataContext from "../context/DataContext.jsx";
import DefaultSpinner from "../components/DefaultSpinner.jsx";
import {Alert, Button, Card, CardBody} from "@material-tailwind/react";
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
    }, [username, navigate]);

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
    }

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
                            <Card className="w-[min(450px,100%)]">
                                <CardBody className="flex flex-col gap-3">
                                    <Alert color="red">
                                        {error.message}
                                    </Alert>
                                    <Button
                                        color="deep-orange"
                                        variant="gradient"
                                        onClick={handleClick}
                                    >
                                        Go Back
                                    </Button>
                                </CardBody>
                            </Card>
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