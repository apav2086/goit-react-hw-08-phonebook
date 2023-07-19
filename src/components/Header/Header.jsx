import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/users/operators';
import { isLoggedIn, getUserName } from 'redux/users/selectors';
import css from './header.module.css';

export default function Header({ children }) {
  // Select the 'userName' from the Redux store
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const loggedIn = useSelector(isLoggedIn);
  return (
    <div>
      <section className={css.section}>
        <Link to={'/'} style={{ flexGrow: 1, textDecoration: 'none' }}>
          <h2 className={css.name}>PhoneBook</h2>
        </Link>
        {/* Conditionally render content based on user authentication */}
        {loggedIn ? (
          // If the user is logged in, display the welcome message and logout button
          <>
            {/* Display the welcome message with the user's name */}
            <p className={css.name}>Welcome, {userName}</p>
            {/* Render a button to trigger the 'logOutUser' action on click */}
            <button onClick={() => dispatch(logOutUser())}>Logout</button>
          </>
        ) : (
          // If the user is not logged in, display the login button
          <button onClick={() => nav('/login')}>Log In</button>
        )}
      </section>
    </div>
  );
}