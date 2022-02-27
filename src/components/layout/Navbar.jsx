import { BsGithub } from "react-icons/bs"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

function Navbar({title}) {
    return (
        <div className="navbar bg-slate-800 shadow-xl">
            <div className="container mx-auto flex justify-between">
                <div className="flex">
                    <BsGithub className="text-3xl mr-3" />
                    <Link to="/" className="font-bold text-lg">{title}</Link>
                </div>
                <div className="flex">
                    <Link to="/" className="btn btn-ghost">Home</Link>
                    <Link to="/about" className="btn btn-ghost">About</Link>
                </div>
            </div>
        </div>
    )
}

Navbar.defaultProps = {
    title: "Github Finder"
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar;