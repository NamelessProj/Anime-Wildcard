import './style.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from "@material-tailwind/react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App.jsx';
import {DataProvider} from "./context/DataContext.jsx";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql.anilist.co/",
    cache: new InMemoryCache()
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DataProvider>
            <ApolloProvider client={client}>
                <ThemeProvider>
                    <Router future={{
                        v7_startTransition: true,
                    }}>
                        <Routes>
                            <Route path="/*" element={<App />} />
                        </Routes>
                    </Router>
                </ThemeProvider>
            </ApolloProvider>
        </DataProvider>
    </StrictMode>,
);