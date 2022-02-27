import UsersList from "../components/users/UsersList";
import UserSearch from "../components/users/UserSearch";
import Alert from "../components/layout/Alert";

function Home() {
    return (
        <div className="flex flex-col justify-between">
            <Alert />
            <UserSearch />
            <UsersList />
        </div>
    )
}

export default Home;