import { useContext, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"
import { BsPeopleFill } from "react-icons/bs"
import { RiTeamFill, RiGitRepositoryFill } from "react-icons/ri"
import { GiStack } from "react-icons/gi"
import { Link, useParams } from "react-router-dom";
import GithubContext from "../components/context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";
import ACTIONS, { getUserAndRepos } from "../components/context/github/GithubActions";

function UserDetails() {
    const params = useParams();
    const {user, repos, isLoading, dispatch} = useContext(GithubContext);
    useEffect(()=>{
        dispatch({type: ACTIONS.SET_IS_LOADING_TRUE});
        const getUserData = async () => {
            const userData = await getUserAndRepos(params.login);
            dispatch({type: ACTIONS.GET_USER_AND_REPOS, payload: userData})
        }
        getUserData();
    }, [dispatch, params.login])
    const {
        name,
        login,
        type,
        avatar_url,
        location,
        company,
        bio,
        blog,
        hireable,
        twitter_username,
        followers,
        following,
        public_repos,
        public_gists,
        html_url
    } = user
    return (
        <div className="flex flex-col items-center justify-between">
            <div className="w-11/12 mb-2">
                <Link to="/" className="btn btn-ghost"><FaArrowLeft className="mr-2"/>Back to search</Link>
            </div>
            { isLoading ? <Spinner /> :
                (
                    <>
                        <div className="card card-side bg-base-100 mb-4 shadow-xl w-11/12">
                            <div className="relative">
                                <img src={avatar_url} alt="Album" className="block w-80 h-80 opacity-80 shadow-inner shadow-black" />
                                <div className="absolute bottom-7 left-3 text-white text-sm subpixel-antialiased font-semibold">{name}</div>
                                <div className="absolute bottom-3 left-3 text-white text-xs subpixel-antialiased font-light">{login}</div>
                            </div> 
                            <div className="card-body justify-between">
                                <div className="flex items-baseline">
                                    <h2 className="card-title">{name}</h2>
                                    <div className="badge badge-accent h-4 text-xs mx-3">{type}</div>
                                    <div className="badge badge-success h-4 text-xs">Hireable</div>
                                </div>
                                <div className="">{bio}</div>
                                <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-outline w-1/4">Visit Github Profile</a>
                                <div className="flex flex-row rounded-lg shadow-xl w-full justify-between">
                                    <div className="flex flex-col grow p-3 shadow-xl">
                                        <div className="font-medium text-slate-400">Location</div>
                                        <div className="text-sm font-bold">{location}</div>
                                    </div>
                                    <div className="flex flex-col grow border-slate-700 border-x-2 p-3 shadow-xl">
                                        <div className="font-medium text-slate-400">Company</div>
                                        <div className="text-sm font-bold">{company}</div>
                                    </div>
                                    <div className="flex flex-col grow p-3 shadow-xl">
                                        <div className="font-medium text-slate-400">Twitter</div>
                                        <div className="text-sm font-bold">{twitter_username}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row rounded-lg shadow-md mb-4 shadow-slate-800 w-11/12 justify-between">
                            <div className="flex items-center justify-between grow shadow-xl p-4">
                                <div className="flex flex-col grow">
                                    <div className="font-light text-slate-400">Followers</div>
                                    <div className="text-3xl font-bold">{followers}</div>
                                </div>
                                <RiTeamFill className="w-10 h-10 text-pink-600"/>
                            </div>
                            <div className="flex items-center justify-between grow shadow-xl p-4">
                                <div className="flex flex-col grow">
                                    <div className="font-light text-slate-400">Following</div>
                                    <div className="text-3xl font-bold">{following}</div>
                                </div>
                                <BsPeopleFill className="w-10 h-10 text-pink-600"/>
                            </div>
                            <div className="flex items-center justify-between grow shadow-xl p-4">
                                <div className="flex flex-col grow">
                                    <div className="font-light text-slate-400">Public Repos</div>
                                    <div className="text-3xl font-extrabold">{public_repos}</div>
                                </div>
                                <RiGitRepositoryFill className="w-10 h-10 text-pink-600"/>
                            </div>
                            <div className="flex items-center justify-between grow shadow-xl p-4">
                                <div className="flex flex-col grow">
                                    <div className="font-light text-slate-400">Public Gists</div>
                                    <div className="text-3xl font-extrabold">{public_gists}</div>
                                </div>
                                <GiStack className="w-10 h-10 text-pink-600"/>
                            </div>
                        </div>
                        <RepoList repos={repos} />
                    </>
                )
            }
        </div>
    )
}

export default UserDetails;