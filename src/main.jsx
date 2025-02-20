import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {DataProvider} from "./context/DataContext.jsx";
import App from './App.jsx';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {ThemeProvider} from "@material-tailwind/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const client = new ApolloClient({
    uri: "https://graphql.anilist.co/",
    cache: new InMemoryCache()
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DataProvider>
            <ThemeProvider>
                <ApolloProvider client={client}>
                    <BrowserRouter future={{
                        v7_startTransition: true,
                    }}>
                        <Routes>
                            <Route path="/*" element={<App />} />
                        </Routes>
                    </BrowserRouter>
                </ApolloProvider>
            </ThemeProvider>
        </DataProvider>
    </StrictMode>,
);