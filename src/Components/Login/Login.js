import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.scss';
import google from '../../images/google.png';
import fb from '../../images/fb.png';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { UserContext } from '../../App';
import NavBar from '../NavBar/NavBar';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
function Login() {
  const { setLoggedInUser } = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  })
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        // setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }

  const handleFbLogin = () => {
    firebase.auth().signInWithPopup(fbProvider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      // setLoggedInUser(user);
      // history.replace(from);
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  const resetPassword = email => {
    var auth = firebase.auth();
    auth.sendPasswordResetEmail(email).then(function () {
    }).catch(function (error) {
      console.log(error)
    });
  }



  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: ''
        }
        setUser(signedOutUser);
      })
  }

  const handleBlur = (e) => {

    let isFormValid = true;
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          // setUser(newUserInfo);
          updateUserName(user.name);
          setLoggedInUser(newUserInfo);
          history.replace(from);

        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          // setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch(function (error) {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);

        });
    }
    e.preventDefault();
  }
  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {
    }).catch(function (error) {
    });
  }
  return (
    <>
      <NavBar></NavBar>
      <section className='container' style={{ width: '400px' }}>
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="items shadow-lg">
                <h3 className='mb-2 font-weight-bold'>
                  {newUser ? 'Create an account' : 'Login'}
                </h3>

                <form onSubmit={handleSubmit}>
                  {newUser && <input name="name" className="form-control" onBlur={handleBlur} type="text" placeholder="Your Name" />}
                  <br />
                  <input className="form-control" type="text" onBlur={handleBlur} name="email" placeholder=" Email" required />
                  <br />
                  <input type="password" className="form-control" onBlur={handleBlur} name="password" placeholder=" Password" required />
                  <br />
                  <label
                    className="remember"
                    htmlFor="remember">
                    <input
                      className="remember-check"
                      type="checkbox"
                      id="remember"
                      name="remember"
                      value="remember" />
              Remember Me
          </label>
                  <button
                    className="forget-btn"
                    onClick={() => resetPassword(user.email)}>
                    Forget Password
          </button>
                  <br></br>
                  <input className="submit-btn" type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                </form>
                <div className="m-3">
                  <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                  <label htmlFor="">Create new account</label>
                </div>
                <p style={{ color: 'red' }}> {user.error}</p>
                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged In'} Successfully</p>}
              </div>
            </div>
          </div>

          <p className="mt-2 text-dark text-center">-------------------Or--------------------</p>

          {/* Google sign in start */}
          <div className="container ml-3 mr-3">
            <div className="row" onClick={handleSignIn} style={{ cursor: 'pointer' }}>
              <div className="col-md-4 shadow-lg p-2 mt-1">
                <img src={google} style={{ width: '40px' }} alt="" />
              </div>
              <div className="col-md-8 shadow-lg rounded p-2 mt-1">
                <p >Continue with google</p>
              </div>
            </div>

            {/* Google sign in End */}

            {/* Facebook sign in start */}

            <div className="row" style={{ cursor: 'pointer' }}>
              <div className="col-md-4 shadow-lg p-2 mt-1">
                <img src={fb} style={{ width: '50px' }} alt="" />
              </div>
              <div className="col-md-8 shadow-lg rounded p-2 mt-1">
                <p onClick={handleFbLogin}>Continue with Facebook</p>
              </div>
            </div>
          </div>
          {/* Facebook sign in */}

        </div>
      </section>
    </>
  );
}

export default Login;
