import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs"

function NotFound() {
    return (
        <div className="hero">
            <div className="hero-content flex-col h-72 justify-between">
                <h1 className="text-8xl font-bold">Oops!</h1>
                <p className="text-5xl font-bold">404 - Not found</p>
                <Link to="/" className="btn btn-primary">
                    <BsHouseFill className="mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound;