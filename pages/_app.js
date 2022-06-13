import {ApolloProvider}  from "@apollo/client";
import '../styles/globals.css'

import client from '../config'

function MyApp({ Component, pageProps }) {
  return (
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
)
}

export default MyApp
