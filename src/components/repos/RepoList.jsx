import Repo from "./Repo";

function RepoList({repos}) {
    return (
        <div className="w-11/12 rounded-lg shadow-slate-800 p-6 shadow-xl">
            <h2 className="text-2xl font-bold">Latest Repositories</h2>
            {repos.map(repo => <Repo key={repo.id} repo={repo} />)}
        </div>
    )
}

export default RepoList;