import { useContext } from "react";
import { BsXCircleFill } from "react-icons/bs"
import AlertContext from "../context/alert/AlertContext";

function Alert() {
    const {alert} = useContext(AlertContext);
    return (
        <>
            {alert && 
            (<div className="flex items-center bg-none p-2 font-bold text-md duration-200">
                <BsXCircleFill className="text-red-600 antialiased" />
                <span className="mx-2 antialiased">{alert.msg}</span>
            </div>)}
        </>
    )
}

export default Alert;