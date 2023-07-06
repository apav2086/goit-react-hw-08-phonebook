import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from "redux/users/operators";
import { isLoggedIn } from "redux/users/selectors";

export default function Header() {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const loggedIn = useSelector(isLoggedIn);
    return (
        <div>
            <Link to={'/'}>
                <h4>PhoneBook</h4>
            </Link>
            {loggedIn ? (<button  onClick={() => dispatch(logOutUser())}>Logout</button>) : (
            <button  onClick={() => nav('/login')}>Log In</button>)}
           
        </div>
    );
}