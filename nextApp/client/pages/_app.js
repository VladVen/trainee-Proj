import React from 'react';
import '../styles/global.css'
import {ApolloProvider} from "@apollo/client";
import client from "../client/client";

export default function MyApp({Component, pageProps}) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

