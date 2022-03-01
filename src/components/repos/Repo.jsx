import { BsLink45Deg, BsStar, BsEye, BsInfoCircle } from "react-icons/bs"
import { AiOutlineFork } from "react-icons/ai"

function Repo({repo: {name, html_url, stargazers_count, watchers_count, forks_count, open_issues_count}}) {
    return (
        <div className="p-4 bg-slate-800 rounded-xl my-3">
            <a href={html_url} target="_blank" rel="noreferrer">
                <h2 className="flex items-center font-bold"><BsLink45Deg className="mr-2" />{name}</h2>
            </a>
            <div className="flex mt-2">
                <div className="badge badge-primary text-xs"><BsEye className="mr-1"/>{watchers_count}</div>
                <div className="badge badge-info text-xs mx-2"><BsStar className="mr-1"/>{stargazers_count}</div>
                <div className="badge badge-success text-xs"><AiOutlineFork className="mr-1"/>{forks_count}</div>
                <div className="badge badge-warning text-xs mx-2"><BsInfoCircle className="mr-1"/>{open_issues_count}</div>
            </div>
        </div>
    )
}

export default Repo;