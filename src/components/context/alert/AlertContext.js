import { createContext, useReducer } from "react";
import ACTIONS from "./AlertActions";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export function AlertContextProvider({children}) {
    const [state, dispatch] = useReducer(alertReducer, null)

    const setAlert = (msg, type) => {
        dispatch({type: ACTIONS.SET_ALERT, payload: {msg, type}});
        setTimeout(() => {
            removeAlert();
        }, 3000);
    }

    const removeAlert = () => {
        dispatch({type: ACTIONS.REMOVE_ALERT})
    }

    return(
        <AlertContext.Provider value={{
            alert: state,
            setAlert,
            removeAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;