import { Link,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import { isLoggedIn } from "redux/users/selectors";
import css from './header.module.css';
import UserMenu from "components/UserMenu/UserMenu";
export default function Header() {

    const nav = useNavigate();
    const loggedIn = useSelector(isLoggedIn);
    return (
        <div>
            <section className={css.section}>
            <Link to={'/'} style={{ flexGrow: 1, textDecoration: 'none' }}>
                <h2 className={css.name}>PhoneBook</h2>
            </Link>
                {loggedIn ? ( 
            <UserMenu />) : (
            <button  onClick={() => nav('/login')}>Log In</button>)}
           </section>
        </div>
    );
}