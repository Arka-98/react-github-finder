import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import ACTIONS from "./GithubActions";

const GithubContext = createContext();

export function GithubContextProvider({children}) {

    const [state, dispatch] = useReducer(githubReducer, { users: [], isLoading: false })
    
    const getUsers = async () => {
        dispatch({type: ACTIONS.SET_IS_LOADING})
        const profileResponse = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        const userProfileData = await profileResponse.json();
        // setUsers(userProfileData);
        dispatch({type: ACTIONS.GET_USERS, payload: userProfileData})
        // setIsLoading(false);
    }

    const getUsersBySearch = async (search) => {
        try {
            dispatch({type: ACTIONS.SET_IS_LOADING_TRUE})
            const params = new URLSearchParams({
                q: search
            })
            const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })
            if(!response.ok) {
                dispatch({type: ACTIONS.CLEAR_USERS})
                throw new Error(response.statusText);
            }
            const {items} = await response.json();
            dispatch({type: ACTIONS.GET_USERS, payload: items})
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <GithubContext.Provider value={{
            users: state.users,
            isLoading: state.isLoading,
            getUsersBySearch,
            dispatch
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;