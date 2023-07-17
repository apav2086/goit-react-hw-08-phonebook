import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/users/operators";


export default function UserMenu() {
    const user = useSelector();
    const dispatch = useDispatch;

    return (
        <div>
            <p>Welcome, { user }</p>
            <button type="button" onClick={() => dispatch(logOutUser())}>Logout</button>
        </div>
    );
};