import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import LoginForm from '../../../components/AuthComponents/LoginForm';
import { toast } from 'react-toastify';
import './Login.css'; // Import your styles
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
const LoginPage = () => {
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);

      console.log('Google Sign-In Successful:', user.displayName);
      // Redirect to the dashboard page
      navigate('/dashboard');
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
    }
  };

  React.useEffect(() => {
    if (success) {
      navigate('/dashboard');
    }
  }, [success, navigate]);



  return (
    <>
    <Navbar/>
    <div className='login-container'>
      <div className='login-content'>
        <h1 className='login-heading'>Login</h1>


        <div>
          <button type='button' onClick={handleGoogleSignIn} className='google-signin-btn'>
            <span className='google-icon'>
              <img src="/assets/googlelogo.jpeg"
                alt="Google Logo" />
            </span>
            Sign In with Google
          </button>

        </div>
        <div><h6>Admin login</h6></div>
        <div className=''>
          <LoginForm />
        </div>
      </div>
    </div>
    <Footer/>
</>
  );
};

export default LoginPage;
