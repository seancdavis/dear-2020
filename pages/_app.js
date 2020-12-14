import apolloClient from "../lib/apollo-client"
import { ApolloProvider } from "@apollo/client"

import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
