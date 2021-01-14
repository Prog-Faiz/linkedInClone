import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './scripts/Feed';
import { auth } from './scripts/firebase';
import Header from './scripts/Header';
import Login from './scripts/Login';
import Sidebar from './scripts/Sidebar';
import Widgets from './scripts/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />

      { !user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />  
        </div>
      )}

    </div>
  );
}

export default App;
