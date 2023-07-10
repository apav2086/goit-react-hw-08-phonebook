
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/users/operators";

export default function UserMenu() {

    const dispatch = useDispatch;

    return (
        <div>
            <p>Welcome, { }</p>
            <button type="button" onClick={() => dispatch(logOutUser())}>Logout</button>
        </div>
    );
};