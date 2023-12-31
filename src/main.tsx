import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import RecoilizeDebugger from "recoilize";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <RecoilizeDebugger />
        <App />
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>
);
