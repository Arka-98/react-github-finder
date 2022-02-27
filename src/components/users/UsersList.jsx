import { useEffect, useState } from "react";
import { useContext } from "react";
import Spinner from "../layout/Spinner";
import GithubContext from "../context/github/GithubContext";
import User from "./User";

function UsersList() {
    const {users, isLoading} = useContext(GithubContext);

    return (
        <div className="flex flex-wrap gap-10 justify-center my-5">
            {isLoading ? <Spinner /> : users.map(user => <User key={user.id} item={user} />) }
        </div>
    )
}

export default UsersList;