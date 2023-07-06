import Login from 'pages/Login/Login';
import ContactForm from '../ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import Signup from 'pages/Signup/Signup';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';


function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute><ContactForm /></PrivateRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
      </Routes>
    
    </div>
  );
};
export default App;