import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/users/operators';
export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const nav = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUpUser(formData)).then(() => {
      nav('/');
    });
  }
    return (
        <div>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                  <div>
        <label htmlFor="name" required value={formData.name}>Full Name:</label>
        <input
          type="text"
          id="name"
              name="name"
              onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
        />
      </div>
      <div>
        <label htmlFor="email" required value={formData.email}>Email:</label>
        <input
          type="email"
          id="email"
              name="email"
               onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
        />
                </div>
                <div>
        <label htmlFor="password" required value={formData.password}>Password:</label>
        <input
          type="password"
          id="password"
              name="password"
                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
        />
                </div>
                <button type="submit">Submit</button>
                <Link to={'/login'}><button>Log In</button>
                    </Link>
            </form>
    </div>
)
}