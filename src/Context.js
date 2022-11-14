import { createContext } from "react";

export const Context = createContext({
    voted:false,
    setVoted: () => {},
});