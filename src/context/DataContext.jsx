import {createContext, useState} from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [username, setUsername] = useState("");
    const [userTopArray, setUserTopArray] = useState([]);

    <DataContext.Provider value={{
        username,
        setUsername,
        userTopArray,
        setUserTopArray
    }}>
        {children}
    </DataContext.Provider>
};

export default DataContext;