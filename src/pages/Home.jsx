import UsersList from "../components/users/UsersList";
import UserSearch from "../components/users/UserSearch";

function Home() {
    return (
        <div className="flex flex-col justify-between">
            <UserSearch />
            <UsersList />
        </div>
    )
}

export default Home;