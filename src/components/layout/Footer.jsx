import { BsTwitter, BsFacebook, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-slate-800 shadow-xl p-5 h-14 items-center justify-between">
            <div className="flex">
                Github Finder &copy; 2022 - All rights reserved
            </div>
            <div className="flex w-24 justify-between">
                <Link to="/">
                    <BsGithub className="text-xl" />
                </Link>
                <Link to="/">
                    <BsTwitter className="text-xl" />
                </Link>
                <Link to="/">
                    <BsFacebook className="text-xl" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer;