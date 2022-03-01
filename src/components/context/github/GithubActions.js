import axios from "axios"

const ACTIONS = {
    GET_USERS: "GET_USERS",
    GET_USER: "GET_USER",
    GET_USER_REPOS: "GET_USER_REPOS",
    GET_USER_AND_REPOS: "GET_USER_AND_REPOS",
    SET_IS_LOADING_TRUE: "SET_IS_LOADING_TRUE",
    SET_IS_LOADING_FALSE: "SET_IS_LOADING_FALSE",
    CLEAR_USERS: "CLEAR_USERS"
}

const github = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_URL,
    headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` }
});

export const getUsers = async () => {
    const response = await github.get(`/users`)
    return response.data;
}

export const getUsersBySearch = async (search) => {
    try {
        const params = new URLSearchParams({
            q: search
        })
        const response = await github.get(`/search/users?${params}`);
        return response.data.items;
    } catch(err) {
        console.log(err);
    }
}

export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: "created",
        per_page: 10
    })
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)
    ]);
    return {user: user.data, repos: repos.data}
}

export default ACTIONS;