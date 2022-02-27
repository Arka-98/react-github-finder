import ACTIONS from "./GithubActions";

function githubReducer(state, action) {
    switch(action.type) {
        case ACTIONS.GET_USERS:
            return { ...state, users: action.payload, isLoading: false };
        case ACTIONS.SET_IS_LOADING_TRUE:
            return { ...state, isLoading: true };
        case ACTIONS.SET_IS_LOADING_FALSE:
            return { ...state, isLoading: false };
        case ACTIONS.CLEAR_USERS:
            return { users: [], isLoading: false };
        default:
            return state;
    }
}

export default githubReducer;