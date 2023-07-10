import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from "redux/users/operators";
import { isLoggedIn } from "redux/users/selectors";
import css from './header.module.css';
export default function Header() {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const loggedIn = useSelector(isLoggedIn);
    return (
        <div>
            <section className={css.section}>
            <Link to={'/'} style={{ flexGrow: 1, textDecoration: 'none' }}>
                <h2 className={css.name}>PhoneBook</h2>
            </Link>
            {loggedIn ? (<button onClick={() => dispatch(logOutUser())}>Logout</button>) : (
            <button  onClick={() => nav('/login')}>Log In</button>)}
           </section>
        </div>
    );
}