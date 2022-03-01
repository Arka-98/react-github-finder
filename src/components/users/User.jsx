import { Link } from "react-router-dom";

function User({item: {login, avatar_url}}) {
    return (
        <Link to={`user/${login}`}>
            <div className="flex flex-col py-3 px-6 duration-300 shadow-md shadow-slate-900 bg-slate-800 hover:bg-slate-900 hover:scale-105 hover:cursor-pointer rounded-xl">
                <img src={avatar_url} alt={login} className="w-32 h-32 rounded-full mx-auto" />
                <div className="text-center pt-5 pb-2 font-bold">{login}</div>
            </div>
        </Link>
    )
}

export default User;