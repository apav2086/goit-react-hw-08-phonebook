import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/users/operators';
import css from "./login.module.css";
export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
   const nav = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(logInUser(formData)).then(() => {
    
      nav('/');
    });
  }
    return (
        <div className={css.div}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" required value={formData.email}>Email:</label>
        <input className={css.input}
          type="email"
          id="email"
          name="email"
          onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
        />
                </div>
                <div>
        <label htmlFor="password" required value={formData.password}>Password:</label>
        <input className={css.input}
          type="password"
          id="password"
          name="password"
          onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
        />
                </div>
          <button type="submit">Submit</button>
          <Link to={'/signup'}>
            <button>Sign Up</button>
          </Link>
            </form>
    </div>
)
}