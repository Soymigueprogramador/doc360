import { useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { Navigate } from "react-router-dom";

export function MainGuard(props) {
    const user = useContext(UserContext).user;

    if (!user.user_id) {
        return <Navigate to="/" replace />;
    }

    return props.children;
}