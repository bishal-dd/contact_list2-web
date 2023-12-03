import React from "react";
import { RecoilRoot } from "recoil";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const Provider: React.FCWithChildren = (props) => {
  return (
    <RecoilRoot>
      <ApolloProvider>{props.children}</ApolloProvider>
    </RecoilRoot>
  );
};
