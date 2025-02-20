import {createContext, useState} from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [username, setUsername] = useState("");
    const [topUserArray, setTopUserArray] = useState([]);

    return (
        <DataContext.Provider value={{
            username,
            setUsername,
            topUserArray,
            setTopUserArray
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;