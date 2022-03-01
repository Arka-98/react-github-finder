import { useContext, useState } from "react";
import GithubContext from "../context/github/GithubContext";
import ACTIONS, { getUsersBySearch } from "../context/github/GithubActions";
import AlertContext from "../context/alert/AlertContext";

function UserSearch() {
    const { dispatch } = useContext(GithubContext);
    const { alert, setAlert, removeAlert } = useContext(AlertContext);
    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleClear = () => {
        setSearch("");
        dispatch({type: ACTIONS.CLEAR_USERS});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(search.trim() === "") {
            setAlert("Please type something!", "error")
            dispatch({type: ACTIONS.CLEAR_USERS});
        } else if(search.trim() !== "") {
            removeAlert();
            dispatch({type: ACTIONS.SET_IS_LOADING_TRUE})
            const users = await getUsersBySearch(search);
            dispatch({type: ACTIONS.GET_USERS, payload: users});
        }
    }
    return (
        <div className="flex">
            <form onSubmit={handleSubmit} className="form-control grow">
                <div className="flex relative">
                    <input type="text" value={search} onChange={handleSearch} placeholder="Search for a user..." className="input input-bordered bg-gray-300 text-slate-600 placeholder-slate-600 grow" />
                    <button className="btn btn-ghost text-slate-700 absolute right-4" type="submit">Search</button>
                </div>
            </form>
            {search.trim() !== "" && <button className="btn btn-ghost ml-2" onClick={handleClear}>Clear</button>}
        </div>
    )
}

export default UserSearch;