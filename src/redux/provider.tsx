"use client";

import { store } from "./store";
import { Provider } from "react-redux";

interface Props{
  children: React.ReactNode;  // children is the content of our app, it can be a single component or multiple components wrapped in JSX
}

export function Providers({ children }: Props) {
  return <Provider store={store} >{children} </Provider>;
}
