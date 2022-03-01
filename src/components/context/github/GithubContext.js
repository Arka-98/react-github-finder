import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export function GithubContextProvider({children}) {

    const [state, dispatch] = useReducer(githubReducer, { users: [], user: {}, repos: [], isLoading: false })

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;